# react-auto-template

Create react template with clean architecture.

## Quick Overview

```sh
npx react-auto-clean-template my-app
cd my-app
npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='https://github.com/monzoor/react-auto-clean-template/blob/87b29f73744c88baf65fb03f85812ba15624285b/assets/out.gif' width='600' alt='npm start'>
</p>

## Philosophy

![high-level-diagram](https://github.com/monzoor/react-auto-clean-template/blob/670fd433dddb21b53f9636dc9e4225bf618d59f5/assets/high-level-diagram.jpeg)

The nomenclature may vary, but the concept behind this architectural pattern is: the domain dictates how tools should be organized and not the other way around.
What I mean by that is that we should organize our codebase around the business rules and not around the frameworks we use to achieve business rules.
The diagram above shows how the dependency rule works, the inner circles must not know about the outer circles. That is, there cannot be an import of a use case within an entity, or import of a framework within a use case.
Another important rule is: entities and use cases should not rely on external libraries. The explanation is simple, the core of our application must be robust enough and malleable enough to meet the demands of the business without needing any external intervention.
If by chance, an essential part of the application core MUST BE an external dependency. Dependency needs to be modeled following [dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle).

## Communication flow

![communication-flow-diagram](https://github.com/monzoor/react-auto-clean-template/blob/670fd433dddb21b53f9636dc9e4225bf618d59f5/assets/communication-flow.jpeg)

### A brief explanation of each responsibility

- **Entity**: Application independent business rules
- **Interactor**: Application-specific business rules
- **Adapter**: Glue code from/to _Interactors_ and _Presenter_, most of the time implementing a framework-specific behaviour.
  e. g.: We have to connect _Interactor_ with react container, to do so, we have to connect _Interactor_ with redux (framework) and then connect redux to container components.
- **Presenter**: Maps data from/to _Adapter_ to/from _Components_.
- **Components**: Simplest possible unit of presentation. Any mapping, conversion, MUST be done by the _Presenter_.

### A typical top-level directory layout

    .
    ├── public
    └── src
    	├── Components				# All common components
    	├── Containers				# All pages
    	├── Core					# Base redux, base redux store, base layouts, routes setup
    	├── Layouts					# Public, private layouts
    	├── Routes					# Public, private route configurations
    	├── constants				# All constants
    	├── reducers				# All reducers
    	├── styles					# Styles. SCSS
    	└── test					# Test
