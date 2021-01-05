import { getRankings } from "./get-rankings.js";

const university = Deno.args[0];
const username = Deno.args[1];

console.log(await getRankings(university, username));
