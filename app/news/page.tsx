import InsightsPage from "@/app/insights/page";
import { buildMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Aviation Insights & Flight Support Articles | KCL",
  description:
    "Read practical articles on flight permissions, aviation planning, ground operations and flight support from KCL.",
  path: "/insights",
});

export default InsightsPage;
