<template>
    <div class="topnav">

        <div class="logoBanner">
            <img src="../assets/vue.svg" />
            <h2>Scratch for Discord</h2>
        </div>

        <a href="#" @click="sayCode()">JavaScript Code</a>
        <a href="#">Examples</a>
        <a href="#">Socials</a>
        <a href="#">Changelog</a>
        <a href="#" class="endButton">Credits</a>
        <a id="gitScUi" style="right: 0px; visibility: hidden;" @click="launchGitUi()">Github Source Control</a>
        <a style="right: 0px; position: absolute;" href="https://github.com/login/oauth/authorize?scope=repo&client_id=b6d2e4d50218cbda081b">Github Sign In</a>
        <!-- <a href="#" class="endButton" :key="reload">Number of blocks:
            {{ totalBlocks }}</a> -->
    </div>
</template>

<script setup lang="ts">
import Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";
import Swal from "sweetalert2";
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'prismjs'

function sayCode() {

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
            <code style="word-wrap: break-word;">
                ${Prism.highlight(code, Prism.languages.javascript, 'javascript')}
            </code>
        </pre>`,
        width: `70%`,
        background: '#121212',
        color: '#fff',
        padding: `0%`,
        confirmButtonText: `Copy to clipboard`
    })
}

function launchGitUi() {
     Swal.fire({
                title: "Github Source Control",
                  input: 'select',
                                inputOptions: {
                                    't1': 'Repository Selection',
                                    't3': 'Pull',
                                    't4': 'Push',
                                    't5': 'Logout',
                                },
                                inputPlaceholder: 'Select a Option',
                                showCancelButton: true,
            }).then(async (result) => {
                console.log(result)
            })

}


</script>


<style scoped>
/* This style is scoped, first we styling the entire navBar */
.topnav {
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5.1%;
    overflow: hidden;
    background-color: #121212;
    user-select: none
}

/* And the elements :)*/
h2 {
    position: relative;
    top: -14px;
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 8px;
    text-decoration: none;
    font-size: 17px;
    letter-spacing: 0.5px;
}


img {
    transform: translateY(-6px);
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 8px;
    padding-right: 0px;
    text-decoration: none;
    font-size: 17px;
    border-left: 0px solid;
    border-color: #2e2d2d;
}

a {
    position: relative;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 8px;
    text-decoration: none;
    font-size: 15px;
    border-left: 1px solid;
    border-color: #2e2d2d;
    letter-spacing: 0.5px;
}

/* Animations for the hover on the links/button */
a:hover {
    transform: translateY(-2px);
}

a {
    position: relative;
}

a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #41b883;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
}

a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
}

/* This is used to the last button has an eding border so it's looks more clean! */

.endButton {
    border-right: 1px solid;
    border-color: #2e2d2d;
}
</style>
