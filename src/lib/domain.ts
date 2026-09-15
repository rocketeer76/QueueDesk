export type Role = "requester" | "agent" | "administrator";
export function canViewTicket(role: Role, userId: string, requesterId: string) {
  return role !== "requester" || userId === requesterId;
}
export function canViewInternalNote(role: Role) {
  return role === "agent" || role === "administrator";
}
export function visibleComment<T extends { isInternal: boolean }>(
  role: Role,
  comment: T,
) {
  return !comment.isInternal || canViewInternalNote(role);
}
