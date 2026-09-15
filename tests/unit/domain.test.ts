import { describe, expect, it } from "vitest";
import { canViewTicket, visibleComment } from "../../src/lib/domain";
describe("ticket authorization", () => {
  it("isolates requesters", () =>
    expect(canViewTicket("requester", "a", "b")).toBe(false));
  it("hides internal notes", () =>
    expect(visibleComment("requester", { isInternal: true })).toBe(false));
});
