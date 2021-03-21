#!/bin/bash

npm i react-auto-clean-template

# npx create-react-app new
# cp -a node_modules/react-auto-clean-template/rootConfigs/. new
# cp -a node_modules/react-auto-clean-template/template/. new/src

# sed -i.bak 's/react-scripts start/craco start/g' new/package.json
# sed -i.bak 's/react-scripts build/craco build/g' new/package.json
# sed -i.bak 's/"react-scripts test",/"craco test"/g' new/package.json
# sed -i.bak 's/"eject": "react-scripts eject"/ /g' new/package.json


# sed -i -e 's/"eslintConfig"/insert\
# &/' new/package.json

# sed -i -e '/insert/r node_modules/react-auto-clean-template/copyItems/jestAlias' new/package.json 

# sed -i.bak 's/insert/ /g' new/package.json

# rm -rf new/package.json.bak

# rm -rf new/src/App.css new/src/App.js new/src/App.test.js new/src/index.css new/src/logo.svg

# sed -i.bak 's/import App from '\''.\/App'\''/import App from '\''.\/Core'\''/g' new/src/index.js
# sed -i.bak 's/import '\''.\/index.css'\'';/ /g' new/src/index.js 

# rm -rf new/src/index.js.bak

# rm -rf new/node_modules
# rm -rf new/.git
# mv new/.* .
# mv new/* .
# rm -rf new react-auto-template

# rm -rf src/index.js.bak
# rm -rf package.json-e


yarn add react-redux react-router-dom redux redux-devtools-extension redux-thunk i18next react-i18next bootstrap@next node-sass @craco/craco craco-alias
