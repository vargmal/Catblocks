#!/bin/sh

: '
Catblocks docker image entrypoint
@author andreas.karner@student.tugraz.at


In the Dockerfile, we have defined the
  workingdir to be /home/catblocks
Further the repository is cloned to 
  /home/catblocks/Catblocks/
Repo and branch are set in env variables
  REPO -> "https://github.com/Catrobat/Catblocks.git"
  BRANCH -> "develop"
  WORKHOME -> "/home/catblocks/"
  RELREPOHOME -> "Catblocks"
  REPOHOME -> $WORKHOME$RELREPOHOME

'

# change into repository home
cd $REPOHOME

# check if remote is newer
git fetch origin $BRANCH
CHANGES=$(git diff origin/$BRANCH | wc -l)
if [ $CHANGES -gt 0 ]
then
  echo "###########################################################"
  echo "### Remote got updated, please rebuild docker container ###"
  echo "###########################################################"

  # update local and rebuild stuff
  git pull origin $BRANCH
  yarn install
fi

# build your render project
yarn run render:build

# run all programs from /test/programs/
rm -rf "${REPOHOME}/dist/assets/programs/"
cp -r "$TESTDIR" "${REPOHOME}/dist/assets/programs/"

# start http server
cd "${REPOHOME}/dist/"
python -m http.server 8080

exit 0