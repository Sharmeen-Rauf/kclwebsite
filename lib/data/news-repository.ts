import fs from "fs/promises";
import path from "path";
import type { NewsPost, NewsPostMeta, NewsRepository } from "./interfaces";

const NEWS_DIR = path.join(process.cwd(), "content", "news");

function parseFrontmatter(raw: string): {
  meta: NewsPostMeta;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Invalid MDX frontmatter in content/news");
  }

  const frontmatterBlock = match[1];
  const body = match[2].trim();

  const getField = (key: string): string => {
    const regex = new RegExp(`^${key}:\\s*"?([^"\\r\\n]+)"?$`, "m");
    const m = frontmatterBlock.match(regex);
    return m ? m[1].trim() : "";
  };

  const relatedMatch = frontmatterBlock.match(
    /relatedSlugs:\r?\n((?:\s*-\s*"?[^"\r\n]+"?\r?\n?)*)/
  );
  const relatedSlugs: string[] = [];
  if (relatedMatch) {
    const lines = relatedMatch[1].split(/\r?\n/);
    for (const line of lines) {
      const itemMatch = line.match(/-\s*"?([^"\r\n]+)"?/);
      if (itemMatch) {
        relatedSlugs.push(itemMatch[1].trim());
      }
    }
  }

  return {
    meta: {
      title: getField("title"),
      slug: getField("slug"),
      date: getField("date"),
      category: getField("category"),
      author: getField("author"),
      readingTime: getField("readingTime"),
      coverImage: getField("coverImage") || "/img/news-ops-desk.svg",
      coverAlt:
        getField("coverAlt") ||
        "Kashmir Corporation Pvt Ltd aviation operations briefing",
      excerpt: getField("excerpt"),
      relatedSlugs,
    },
    content: body,
  };
}

class LocalMdxNewsRepository implements NewsRepository {
  async getAllPosts(): Promise<NewsPostMeta[]> {
    const files = await fs.readdir(NEWS_DIR);
    const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

    const posts: NewsPostMeta[] = [];
    for (const file of mdxFiles) {
      const raw = await fs.readFile(path.join(NEWS_DIR, file), "utf-8");
      const { meta } = parseFrontmatter(raw);
      posts.push(meta);
    }

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  }

  async getPostBySlug(slug: string): Promise<NewsPost | null> {
    try {
      const filePath = path.join(NEWS_DIR, `${slug}.mdx`);
      const raw = await fs.readFile(filePath, "utf-8");
      const { meta, content } = parseFrontmatter(raw);
      return {
        ...meta,
        content,
      };
    } catch {
      return null;
    }
  }
}

export const newsRepository: NewsRepository = new LocalMdxNewsRepository();

