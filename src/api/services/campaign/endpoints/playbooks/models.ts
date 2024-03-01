import { Nullable } from "../../../../types";
import { AuditUser, Auditable } from "../../../shared-models";

interface ThinPlaybookRevision extends Pick<Auditable, "id" | "updatedAt"> {}

export interface PlaybookListItem extends Auditable {
  accountCount: number;
  draft: Nullable<ThinPlaybookRevision>;
  name: string;
  published: Nullable<ThinPlaybookRevision>;
  publishedBy: Nullable<AuditUser>;
  state: PlaybookRevisionState;
  status: PlaybookStatus;
}

export const enum PlaybookRevisionState {
  Draft = "draft",
  Published = "published",
  Deactivated = "deactivated",
  Paused = "paused",
}

export const enum PlaybookStatus {
  Draft = "draft",
  Published = "published",
  Archived = "archived",
  PendingChanges = "pendingChanges",
}
