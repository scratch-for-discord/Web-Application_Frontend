<template>
    <div class="topnav">

        <div class="logoBanner">
            <img src="../assets/vue.svg" />
            <h2>Scratch for Discord</h2>
        </div>

        <a href="#">JavaScript Code</a>
        <a href="#">Examples</a>
        <a href="#">Socials</a>
        <a href="#">Changelog</a>
        <a href="#" class="endButton">Credits</a>
        <!-- <a href="#" class="endButton" :key="reload">Number of blocks:
            {{ totalBlocks }}</a> -->
    </div>
</template>

<script setup lang="ts">

// I am trying to integrate the block count, un-comment this to test it!

// import Blockly from "blockly/core";

// let totalBlocks: number
// let reload = 1

// function dosmth() {
//     /*  Sets the totalBlocks var to the total blocks and it's supposed
//     to force reload the component but it doesn't work...
//     */
//     try {
//         totalBlocks = Blockly.getMainWorkspace().getAllBlocks(false).length
//         reload += 1
//     } catch {
//         console.error('smth')
//     }
//     reload += 1
// }
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
