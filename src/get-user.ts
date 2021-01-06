import { getRankings } from "./get-rankings.ts";

export async function getUser(
  university: string,
  user: any
): Promise<number | undefined> {
  const results = await getRankings(university);

  return results.find(([_rank, u, _name]) => {
    return u === user;
  })?.[0];
}
