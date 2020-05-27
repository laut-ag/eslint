#! /bin/env sh

RED='\033[1;31m'
GREEN='\033[1;32m'
NC='\033[0m'

set -Eeuo pipefail

echo -e "${GREEN}Checking git branch${NC}"
GIT_BRANCH=$(git branch --show-current)

if [ $GIT_BRANCH != master ]; then
    echo -e "${RED}You are on $GIT_BRANCH. Please only publish from master${NC}"
    exit 127
fi

echo -e "${GREEN}What level bump is this?${NC}"
read -p "[patch,minor,major]: " LEVEL

VERSION=$(npm version --no-git-tag-version $LEVEL)

echo -e "${GREEN}commiting $VERSION and tagging${NC}"
git add package-lock.json package.json
git commit -m"$VERSION"
git tag -a $VERSION -m"version $VERSION"

echo -e "${GREEN}Logging into NPM${NC}"
npm login

echo -e "${GREEN}Publishing${NC}"
npm publish

echo -e "${GREEN}Logging out of NPM${NC}"
npm logout

echo -e "${GREEN}pushing to gogs${NC}"
git push --follow-tags origin

echo -e "${GREEN}pushing to github${NC}"
git push --follow-tags github
