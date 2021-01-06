import { delay } from "https://deno.land/std@0.83.0/async/mod.ts";
import { getUser } from "../src/get-user.ts";
import { createIssue, isReady } from "./create-issue.ts";

let lastUserRank = null;
const university = Deno.args[0];
const user = Deno.args[1];
const refreshInterval = Number(Deno.args[2]) || 60 * 60;

console.log(`${user}@${university}`);

while (true) {
  const rank = await getUser(university, user);
  if (rank && rank !== lastUserRank && lastUserRank) {
    const message = `${user}@${university} ${lastUserRank}->${rank} (${
      rank - lastUserRank
    })`;
    console.log(`[${new Date().toTimeString().substring(0, 8)}] ${message}`);
    if (isReady) {
      try {
        await createIssue({
          repo: Deno.args[3],
          owner: Deno.args[4],
          title: message,
        });
      } catch (e) {
        console.log(e);
      }
      console.log("Created issue!");
    }
  } else {
    console.log(
      `[${new Date()
        .toTimeString()
        .substring(0, 8)}] No change, ${user} is still rank`,
      rank
    );
  }
  lastUserRank = rank;
  await delay(refreshInterval * 1000);
}
