<script setup lang="ts">

// Blockly & Packages Imports
import Blockly, { Block } from 'blockly/core';
import { onMounted, ref, VueElement } from "vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";
import { toolboxString } from './toolbox'
import { javascriptGenerator } from "blockly/javascript";

// Components
import NavBar from './components/NavBar.vue'
import SideNavBar from './components/SideNavBar.vue';
import LoadingWindow from './components/LoadingWindow.vue';


// Blocks imports
import './blocks/base'

const DarkTheme = Blockly.Theme.defineTheme('a', {
  'name': 'true_dark',
  'base': Blockly.Themes.Classic,
  'componentStyles': {
    'workspaceBackgroundColour': '#0c111a',
    'toolboxBackgroundColour': '#111827',
    'toolboxForegroundColour': '#fff',
    'flyoutBackgroundColour': '#111827',
    'flyoutForegroundColour': '#ccc',
    'flyoutOpacity': 0.6,
    'scrollbarColour': '#797979',
    'insertionMarkerColour': '#fff',
    'insertionMarkerOpacity': 1,
    'scrollbarOpacity': 0.01,
    'cursorColour': '#d0d0d0',
  },
});



const foo = ref();
// const code = ref();
const options = {
  theme: DarkTheme,
  renderer: "zelos",
  collapse: true,
  comments: true,
  disable: true,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  rtl: false,
  grid: {
    spacing: 25,
    length: 3,
    colour: "#5c5a5a",
    snap: true,
  },
  zoom: {
    controls: true,
    startScale: 0.9,
    maxScale: 5,
    minScale: 0.1,
    scaleSpeed: 1.2
  },
  toolbox: toolboxString,
  move: {
    scrollbars: {
      horizontal: true,
      vertical: true
    },
    drag: true,
    wheel: true
  }
};
// Loading Code On workspace
let codeToLoad;

// const showCode = () => (code.value = javascriptGenerator.workspaceToCode(foo.value.workspace));
// let loaded = false;
// let key = 'false'

// async function loadingScreen() {
//   await new Promise(f => setTimeout(f, Math.floor(Math.random() * (5000 - 1000) + 1000)));
//   loaded = true
//   key = 'true'
//   console.log(loaded)
// }
// await loadingScreen()
// key = 'true'


</script>

<template>

  <div id="app">
    <!-- <NavBar /> -->
    <!-- <LoadingWindow v-show="!loaded" :key="key" /> -->
    <SideNavBar />
    <BlocklyComponent id="blockly" :options="options" ref="foo"></BlocklyComponent>
    <!-- <p id="code">
      <button v-on:click="showCode()">Show JavaScript</button>
    <pre v-html="code"></pre>
    </p> -->
  </div>
</template>

<style scoped>
#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0%;
  height: 0%;
  margin: 0;
  background-color: black;
}

#blockly {
  position: absolute;
  left: 55px;
  bottom: 0;
  width: 97.1%;
  /* height: 94.908%; */
  height: 100%;
}
</style>
