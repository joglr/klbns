import "https://deno.land/x/dotenv/load.ts";
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const apiBasePath = "https://api.github.com/repos/joglr/klbns/issues";

const oauthToken = Deno.env.get("GITHUB_OAUTH_TOKEN");

const myoctokit = Octokit.defaults({
  auth: oauthToken,
});
const octokit = new myoctokit();

export async function createIssue(options: any) {
  await octokit.request("POST /repos/joglr/klbns/issues", {
    owner: "joglr",
    repo: "klbns",
    ...options,
  });
}

// console.log(oauthToken);
// console.log(
//   await fetch(apiBasePath, {
//     method: "post",
//     headers: {
//       Authorization: `token ${oauthToken}`,
//     },
//     body: JSON.stringify({
//       accept: "application/vnd.github.v3+json",
//       owner: "joglr",
//       repo: "klbns",
//       title: "This is a test",
//     }),
//   }).then((r) => r.text())
// );
