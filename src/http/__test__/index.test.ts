import { describe, expect, test } from "@jest/globals";
import { fetchPost } from "../index";

describe("fetchPost module", () => {
  test("fetch ...", () => {
    return fetchPost("https://www.baidu.com", {}).then((data) => {
      expect(data).toBeDefined();
    });
  });
});
