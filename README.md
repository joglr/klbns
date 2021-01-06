# Kattis Leaderboard Notification Service

## Requirements

deno

## CLI

**Usage:**

```bash
deno run --allow-net src/index.js <university>
```

## Serverless functions

**Usage:**

```http
GET https://klbns.joglr.dev/api/?university=<universityid>
```


```http
GET https://klbns.joglr.dev/api/user?university=<universityid>&user=<userid>
```
