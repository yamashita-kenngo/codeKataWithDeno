/*
chop関数
*/

function chop(input: number, targetArray: number[]) {
  return 1;
}
/*
test関数
*/
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test({
  name: "testing chop",
  fn(): void {
    assertEquals(-1, chop(3, []));
    assertEquals(-1, chop(3, [1]));
    assertEquals(0, chop(1, [1]));
    assertEquals(0, chop(1, [1, 3, 5]));
    assertEquals(1, chop(3, [1, 3, 5]));
    assertEquals(2, chop(5, [1, 3, 5]));
    assertEquals(-1, chop(0, [1, 3, 5]));
    assertEquals(-1, chop(2, [1, 3, 5]));
    assertEquals(-1, chop(4, [1, 3, 5]));
    assertEquals(-1, chop(6, [1, 3, 5]));
    assertEquals(0, chop(1, [1, 3, 5, 7]));
    assertEquals(1, chop(3, [1, 3, 5, 7]));
    assertEquals(2, chop(5, [1, 3, 5, 7]));
    assertEquals(3, chop(7, [1, 3, 5, 7]));
    assertEquals(-1, chop(0, [1, 3, 5, 7]));
    assertEquals(-1, chop(2, [1, 3, 5, 7]));
    assertEquals(-1, chop(4, [1, 3, 5, 7]));
    assertEquals(-1, chop(6, [1, 3, 5, 7]));
    assertEquals(-1, chop(8, [1, 3, 5, 7]));
  },
});
