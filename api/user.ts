import { ServerRequest } from "https://deno.land/std@0.79.0/http/server.ts";
import { getUserRank } from "../src/get-user-rank.ts";

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

  const user = await getUserRank(university, queryUser);
  req.respond({ body: JSON.stringify(user) });
}
