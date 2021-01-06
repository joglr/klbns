import { delay } from "https://deno.land/std@0.83.0/async/mod.ts";
import { getUser } from "../src/get-user.ts";

let lastUserRank = null;
const university = Deno.args[0];
const user = Deno.args[1];

console.log(`${user}@${university}`);

while (true) {
  const rank = await getUser(university, user);
  if (rank !== lastUserRank) {
    console.log(`${user}@${university} ${lastUserRank}->${rank}`);
    lastUserRank = rank;
  } else console.log("no change");
  await delay(30 * 1000);
}
