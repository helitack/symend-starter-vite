export interface Identifiable {
  id: string;
}

export interface AuditUser {
  id: string;
  name?: string;
  email?: string;
}

export interface AuditableTimestamps {
  createdAt: string;
  updatedAt: string;
}

export interface Auditable extends AuditableTimestamps, Identifiable {
  createdBy: AuditUser;
  updatedBy: AuditUser;
}
