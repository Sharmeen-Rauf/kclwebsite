import type {
  PermitRequestRecord,
  PermitRequestRepository,
} from "./interfaces";

class PreviewPermitRequestRepository implements PermitRequestRepository {
  async create(_data: PermitRequestRecord): Promise<{ referenceId: string }> {
    void _data;
    // Per V2 Rule 8: Never log private inquiry details to the server console prior to verified backend connection.
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `KCL-INQ-${randomSuffix}`;
    return { referenceId };
  }
}

export const permitRequestRepository: PermitRequestRepository =
  new PreviewPermitRequestRepository();
