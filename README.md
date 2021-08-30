<p align="center">
  <img src="https://res.cloudinary.com/djiqx3siw/image/upload/v1624480890/Group_17_yk32tr.svg" />
</p>

<h3 align="center">
  This repository is the frontend base of <a href='https://vimux.vercel.app' target='_blank'>vimox</>
</h3>

# Branches

- **develop** -> any pull request of changes this branch
- **main** -> don´t modify, this is what is running in production

# Structure

![File strcuture](https://res.cloudinary.com/djiqx3siw/image/upload/v1624481066/Vimox_file_structure_azjgha_jyinlp.png)

# How to run locally

```bash
$ npm install
$ npm run dev
```

#### Set enviroment variables env.local

```
NEXT_PUBLIC_EXTERNAL_SERVER_API_URL=http://api.com
```

# Api reference

[Vimox api documentation](https://vimox-api-doc.vercel.app/)

# Contributions

### Pull Requests

1. Fork the repo and create your branch:

   `#[type]/PR description`

   Example:
   `feat/series-page`
   `fix/button-component`

2. Ensure to describe your pull request:

   Edit the PR title by adding a semantic prefix like `fix:` or `feat:` or any other [conventional commit type](https://github.com/commitizen/conventional-commit-types/blob/master/index.json)

   **Title:**
   `#[issue] PR title -> #90 fix: styles the button`
