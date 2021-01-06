import { getRankings } from "./get-rankings.ts";

export async function getUserRank(university: string, user: any) {
  const results = await getRankings(university);
  return results.find(([_rank, u, _name]) => {
    return u === user;
  });
}
