import * as Blockly from "blockly/core";

const blockName = "s4d_login";


const blockData = {
    "type": "block_type",
    "message0": "Connect to Discord with the token %1",
    "args0": [
        {
            "type": "input_value",
            "name": "TOKEN",
            "check": ["String", "Env"]
        }
    ],
    "colour": "#3333ff",
    "tooltip": "Connect your bot to Discord. To get your bot token, go to https://discord.com/developers",
    "helpUrl": "https://discord.com/developers"
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const value = Blockly.JavaScript.valueToCode(block, "TOKEN", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `await s4d.client.login(${value}).catch((e) => { 
        const tokenInvalid = true;
        const tokenError = e;
        if (e.toString().toLowerCase().includes("token")) {
            throw new Error("An invalid bot token was provided!")
        } else {
            throw new Error("Privileged Gateway Intents are not enabled! Please go to https://discord.com/developers and turn on all of them.")
        }
    });\n`;
    return code;
};