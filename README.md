# Kattis Leaderboard Notification Service

## Requirements

deno

## CLI

**Get rankings:**

```bash
deno run --allow-net src/index.js <university>
```
**Watch user ranking:**
```bash
deno run --allow-net --allow-read --allow-env cli/watch.ts <univesityid> <userid>
```

## Serverless functions

**Usage:**

```http
GET https://klbns.joglr.dev/api/?university=<universityid>
```


```http
GET https://klbns.joglr.dev/api/user?university=<universityid>&user=<userid>
```
