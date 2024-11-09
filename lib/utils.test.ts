import { cn } from "./utils";

describe("cn function", () => {
  test("combines class names", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  test("handles conditional class names", () => {
    expect(cn("class1", false && "class2", "class3")).toBe("class1 class3");
  });

  test("merges Tailwind classes correctly", () => {
    expect(cn("p-4", "p-2")).toBe("p-2");
  });

  test("handles undefined and null values", () => {
    expect(cn("class1", undefined, null, "class2")).toBe("class1 class2");
  });

  test("handles empty input", () => {
    expect(cn()).toBe("");
  });
});
