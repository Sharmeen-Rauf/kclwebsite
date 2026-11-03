import type {
  ContactMessageRecord,
  ContactMessageRepository,
} from "./interfaces";

class PreviewContactMessageRepository implements ContactMessageRepository {
  async create(_data: ContactMessageRecord): Promise<{ referenceId: string }> {
    void _data;
    // Per V2 Rule 8: Never log private inquiry details to the server console prior to verified backend connection.
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `KCL-MSG-${randomSuffix}`;
    return { referenceId };
  }
}

export const contactMessageRepository: ContactMessageRepository =
  new PreviewContactMessageRepository();
