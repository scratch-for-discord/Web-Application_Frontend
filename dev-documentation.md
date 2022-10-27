# Must know
### ℹ - Some infos you must know about this project
## NO JAVASCRIPT
This is a [TypeScript](https://www.typescriptlang.org/docs/) project, I don't want any JS files 🤣
## Running and building S4D
If you don't know how to read a package.json file here you go: 
- Run the website : `npm run dev`
- Build for production : `npm run build`
- Run the preview (idk who uses this) : `npm run preview`

# Project management 

The goal of the new version of scratch for discord is to keep the build time minimal and keep the project organized and easy to read. This piece of documentation will guide you through organizing the files and the project structure.


##  Custom Blocks

Custom blocks are using the blockly 9 API. An example file is in the [src/blocks](https://github.com/scratch-for-discord/Web-Application_Frontend/tree/release/3/candidate/src/blocks) directory or check the custom block [API documentation](https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks). 

### How to organize the blocks
There should be only one file for each category. Name the file according to its category name. Blocks inside the file should be put in order of appearance from the toolbox for more readable code and easier bug fixes. A comment must be put on top of each block definition to clarify when a new block starts for better code review.


## Create components

Vue components are created in the components folder [src/components](https://github.com/scratch-for-discord/Web-Application_Frontend/tree/release/3/candidate/src/components). Always comment your work to explain it to other devs.
Try to make one component for one functionality, example:
- NavBar.vue | only contains navbar code.
- FNAF.vue only contains the fnaf game

## Styling 

Global CSS styles or CSS classes that can/will be used thought out the whole project are put under the [src/styles](https://github.com/scratch-for-discord/Web-Application_Frontend/tree/release/3/candidate/src/styles) directory.
If a Vue component has too much styling you can create a CSS file for the component with the component's name inside the [src/styles](https://github.com/scratch-for-discord/Web-Application_Frontend/tree/release/3/candidate/src/styles) directory and then import it inside the component with : <br>
`@import './file_path'`  [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)
