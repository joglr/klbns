import { getRankings } from "./get-rankings.ts";

const university = Deno.args[0];

console.log(await getRankings(university));
