<script setup lang="ts">

// Blockly & Packages Imports
import Blockly from 'blockly/core';
import { ref } from "vue";
import BlocklyComponent from "./components/BlocklyComponent.vue";
import { toolboxString } from './toolbox'
import { javascriptGenerator } from "blockly/javascript";
import './sc'
// Components
import NavBar from './components/NavBar.vue'

// Blocks imports
import './blocks/base'


const DarkTheme = Blockly.Theme.defineTheme('a', {
  'name': 'true_dark',
  'base': Blockly.Themes.Classic,
  'componentStyles': {
    'workspaceBackgroundColour': '#030303',
    'toolboxBackgroundColour': '#121212',
    'toolboxForegroundColour': '#fff',
    'flyoutBackgroundColour': '#121212',
    'flyoutForegroundColour': '#ccc',
    'flyoutOpacity': 0.5,
    'scrollbarColour': '#797979',
    'insertionMarkerColour': '#fff',
    'insertionMarkerOpacity': 0.3,
    'scrollbarOpacity': 0.01,
    'cursorColour': '#d0d0d0',
  },
});



const foo = ref();
const code = ref();
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

const showCode = () => (code.value = javascriptGenerator.workspaceToCode(foo.value.workspace));

</script>

<template>

  <div id="app">
    <NavBar />
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
  left: 0;
  bottom: 0;
  width: 100%;
  height: 94.908%;
}
</style>
