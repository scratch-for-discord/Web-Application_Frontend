import * as Blockly from "blockly/core";

const blockName = "s4d_bot_amount_info";

const blockData = {
    "message0": "%{BKY_BOT_AMOUNT}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "getter",
            "options": [
                [
                    "Pings",
                    "pings"
                ],
                [
                    "Servers",
                    "servers"
                ],
                [
                    "Users",
                    "users"
                ],
                [
                    "Channels",
                    "channels"
                ],
                [
                    "Uptime",
                    "uptime"
                ],
                [
                    "Startup time",
                    'startup'
                ],
                [
                    "Startup timestamp",
                    'timsetamp'
                ]
            ]
        },
    ],
    "colour": "#4C97FF",
    "output": "String",
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }, onchange: function () {
        const getter = this.getFieldValue("getter");
        let BlockValuesSet = (color, output, outputBool) => {
            this.setColour(color)
            if (output == null) { this.setOutput(outputBool) } else { this.setOutput(outputBool, output) }
        }
        if (getter == 'startup') { BlockValuesSet('#5b67a5', 'Date', true) } else { BlockValuesSet('#5b67a5', 'Number', true) }

    }
};

Blockly.JavaScript[blockName] = function (block) {
    const getter = block.getFieldValue("getter");
    let code = ""

    switch (getter) {
        case 'pings':
            code = "s4d.client.ws.ping"
            break

        case 'servers':
            code = "s4d.client.guilds.cache.size";
            break

        case 'channels':
            code = "s4d.client.channels.cache.size";
            break

        case 'users':
            code = "s4d.client.users.cache.size";
            break

        case 'uptime':
            code = "s4d.client.uptime";
            break

        case 'startup':
            code = "String(s4d.client.readyAt)"
            break
        case 'timsetamp':
            code = 's4d.client.readyTimestamp'
            break
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
};