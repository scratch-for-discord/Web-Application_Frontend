<template>
    <div class="border">
        <aside class="w-13" aria-label="Sidebar">
            <div class="p-1.5">
                <img src="../assets/logo.png" />
            </div>

            <div class="overflow-y-auto py-4 p-1.5 rounded bg-gray-900">

                <ul class="space-y-2">
                     <li>
                        <a href="#" @click="showInstructions()"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 important rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="overflow-cli scale-100 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor">
                              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/>
                            </svg>
                            <span class="ml-0"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="overflow-cli scale-100 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            <span class="ml-0"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                </path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                            <!-- <span
                            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> -->
                        </a>
                    </li>
                    <li>
                        <a href="#" @click="showCode()"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                </path>
                                <path
                                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                </path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                            <!-- <span
                            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span> -->
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-1.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="flex-1 ml-3 whitespace-nowrap"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script setup lang="ts">
import Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";
import Swal from "sweetalert2";
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs'

function showInstructions() {
  const instructions: string = `
  <style>
  * {
    text-align: left;
  }
  h2 {
    font-weight: 600;
    font-size: 150%;
    margin-top: 1em;
    margin-bottom: 0.25em;
  }
  </style>
  <p>Welcome to Scratch For Discord™! To get started, you are recommended to read this simple instruction - a simple guide to understanding the basics of this website. If you are a returning user of Scratch For Discord and wants to be more advanced, please visit our <a href="https://docs.scratch-for-discord.com/use/" target="_blank">detailed documentation</a>. Thank you!</p>
  
  <h2>About Scratch For Discord</h2>
  <p>Scratch For Discord™ (aka S4D™) is the Online Scratch-like IDE for Discord Bots.<br><br>Make your Discord bot using blocks!<br>Scratch For Discord™ is currently being maintained by a nice group of people who do this in their free time! It was discontinued by its owner and we decided to continue working on it and make it a bigger project.</p>

  <h2>Scratch For Discord's interface</h2>
  `

    Swal.fire({
        title: 'Instructions',
        html: instructions,
        width: `70%`,
        background: '#293448',
        color: '#fff',
        confirmButtonText: `Got it, let's go!`
    })
}
  
function showCode() {


    const code: string = `
(async () => {
    const Discord = require("discord.js")
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    const s4d = {
        Discord,
        database: new Database(\`\${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json\`),
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
            }
        }
        s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
            partials: ["REACTION"]
            })
            ${javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace())}
    return s4d
    })()`

    Swal.fire({
        title: '<strong class=\"text-white\">JavaScript Code</strong>',
        html: `<pre data-example-id="customHtml" data-codepen-css-external="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" class="code" style="text-align: start; word-wrap: break-word; overflow: auto">
            <code style="word-wrap: break-word; background-color=#121212;">
                ${Prism.highlight(code, Prism.languages.javascript, 'javascript')}
            </code>
        </pre>`,
        width: `70%`,
        background: '#293448',
        color: '#fff',
        padding: `0%`,
        confirmButtonText: `Copy to clipboard`
    })
}

</script>

<style scoped>
aside {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 0.1px;
    border-right: 1px solid #212b3d;
    width: 52px;
}

/* This is used to highlight important buttons on the menu */
.important {
  animation: importantAnimation 3s ease-in-out infinite;
}

@keyframes importantAnimation {
  0% {
    filter: invert(88%) sepia(16%) saturate(6807%) hue-rotate(345deg) brightness(103%) contrast(99%);
  }
  50% {
    filter: invert(67%) sepia(91%) saturate(1191%) hue-rotate(346deg) brightness(102%) contrast(99%);
  }
  100% {
    filter: invert(88%) sepia(16%) saturate(6807%) hue-rotate(345deg) brightness(103%) contrast(99%);
  }
}
</style>