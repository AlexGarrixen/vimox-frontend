# Branches
- **develop**  ->  any pull request of changes this branch
- **main** -> don´t modify, this is what is running in production

# Structure
![Image of Yaktocat](https://res.cloudinary.com/dxarbtyux/image/upload/v1621176475/Vimox_file_structure_azjgha.png) 

# How to run locally
```bash
$ npm install
$ npm run dev
```
####  Set enviroment variables  env.local
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

 2.  Ensure to describe your pull request:

	  Edit the PR title by adding a semantic prefix like `fix:` or `feat:` or any other     [conventional commit type](https://github.com/commitizen/conventional-commit-types/blob/master/index.json)
     
     **Title:**
     `#[issue] PR title -> #90 fix: styles the button`
