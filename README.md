<div align="center">

<h1 align="center">Reimagine AI</h1>

</div>

## Get Started

1. Get [OpenAI API Key](https://platform.openai.com/account/api-keys);

### `CODE` (optional)

Access password, separated by comma.

### `OPENAI_API_KEY` 

Your openai api key, join multiple api keys with comma.

## Requirements

NodeJS >= 18, Docker >= 20

## Development

Before starting development, you must create a new `.env.local` file at project root, and place your api key into it:

```
OPENAI_API_KEY=<your api key here>

# if you are not able to access openai service, use this BASE_URL
BASE_URL=https://chatgpt1.nextweb.fun/api/proxy
```

### Local Development

```shell
# 1. install nodejs and yarn first
# 2. config local env vars in `.env.local`
# 3. run
yarn install
yarn dev
```