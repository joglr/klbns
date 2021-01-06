import { ServerRequest } from "https://deno.land/std@0.79.0/http/server.ts";
import { getRankings } from "../src/get-rankings.ts";

export default async function (req: ServerRequest) {
  console.log(req.url);
  const query = new URL(`http://example.com${req.url}`).searchParams;
  const university = query.get("university");
  const queryUser = query.get("user");
  if (university === null || queryUser === null) {
    return await req.respond({
      status: 400,
      body: JSON.stringify({
        error: "The university and user parameters are required",
      }),
    });
  }

  const results = await getRankings(university);
  const user = results.find(([_rank, user, _name]) => {
    return user == queryUser;
  });
  req.respond({ body: JSON.stringify(user) });
}
