#!/bin/bash

echo "Creacting template"
npm i react-redux react-router-dom redux redux-devtools-extension redux-thunk i18next react-i18next bootstrap@next node-sass @craco/craco craco-alias

git init
git add .
git commit -am "Initialize project with react clean architecuture"
