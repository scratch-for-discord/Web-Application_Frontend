import * as Blockly from "blockly/core";

const blockName = "banned_event"


const blockData = {
    "type": "banned_event",
    "message0": "When a member is %1 %2 %3",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "event",
            "options": [
                [
                    "banned",
                    "guildBanAdd"
                ],
                [
                    "unbanned",
                    "guildBanRemove"
                ],
                [
                    "kicked/leaving",
                    "guildMemberRemove"
                ],
            ]

        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "code"
        }
    ],
    "colour": "#f79400",
    "inputsInline": false,
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};


Blockly.JavaScript['banned_event'] = function (block) {
    let code = ''
    const statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    const event = block.getFieldValue('event')
    code = `s4d.client.on('${event}', async (b) => {\n ${statements_code} \n });\n`;
    console.log(block.getParent())
    return code;
};