export async function getRankings(university, username) {
  const basePath = "https://open.kattis.com/universities/";
  const path = basePath + university;

  let result = await fetch(path).then((r) => r.text());

  const pattern = `<a href="\\/users\\/(\\S+)">(.*?)<`;

  const regex = new RegExp(pattern, "gmi");

  const matches = result.match(regex);

  return matches.map((match, i) => {
    const userPattern = new RegExp(pattern);
    const user = match.match(userPattern)[1];
    const name = match.match(userPattern)[2];
    return [i + 1, user, name];
  });
}
