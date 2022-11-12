# Bandai Components

[![Node.js Package Release](https://github.com/wearesection/react-components/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/wearesection/react-components/actions/workflows/publish.yml)

## Releasing Component to Gitlab

### Step 1 - Create .npmrc file

Create .npmrc file under /packages/react-components and replace {\_authToken}

```@bandai:registry=https://gitlab.com/api/v4/projects/36043101/packages/npm/
//gitlab.com/api/v4/projects/36043101/packages/npm/:_authToken={_authToken}
```

### Step 2 - Pull latest code from develop branch

### Step 3 - Update version in package.json(packages/react-components)

![Updating version in package.json](/document/screenshoot/update-version.png)

### Step 4 - Release

At root directory( / ); Run: `yarn rc:release` to build & auto deploy
