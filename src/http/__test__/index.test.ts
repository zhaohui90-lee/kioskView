import { fetchPost } from "../index";
import { expect, test } from "vitest";

test("fetch....", () => {
  return fetchPost("https://www.baidu.com", {}).then((data) => {
    expect(data).toBeDefined();
  });
});
