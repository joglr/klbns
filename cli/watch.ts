import { delay } from "https://deno.land/std@0.83.0/async/mod.ts";
import { getUser } from "../src/get-user.ts";
import { createIssue } from "./create-issue.ts";

let lastUserRank = null;
const university = Deno.args[0];
const user = Deno.args[1];
const refreshInterval = Number(Deno.args[2]) || 60 * 60;

console.log(`${user}@${university}`);

while (true) {
  const rank = await getUser(university, user);
  if (rank !== lastUserRank && lastUserRank) {
    const message = `${user}@${university} ${lastUserRank}->${rank}`;
    console.log(message);
    await createIssue({ title: message });
    lastUserRank = rank;
  } else {
    console.log("no change");
  }
  await delay(refreshInterval * 1000);
}
