import * as Blockly from "blockly";
import { registerRestrictions } from "../../restrictions";

const blockName = 's4d_message_context'

const blockData = {
    "type": "s4d_message_context",
    "message0": "%1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "option",
            "options": [
                [
                    "Message",
                    "MESSAGE"
                ],
                [
                    "Message channel",
                    "CHANNEL"
                ],
                [
                    "Message channel category",
                    "CATEGORY"
                ],
                [
                    "Message server",
                    "SERVER"
                ]
            ]
        }
    ],
    "output": 'Message',
    "colour": '#a55b80',
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }, onchange: function () {
        let option = this.getFieldValue('option')
        let BlockValuesSet = (color, output, outputBool) => {
            this.setColour(color)
            if (output == null) { this.setOutput(outputBool) } else { this.setOutput(outputBool, output) }
        }
        switch (option) {
            case "MESSAGE":
                BlockValuesSet('#a55b80', 'Message', true)
                break

            case "CHANNEL":
                BlockValuesSet('#a55b80', 'Channel', true)
                break

            case "CATEGORY":
                BlockValuesSet('#a55b80', 'Category', true)
                break

            case "SERVER":
                BlockValuesSet('#d85e47', 'Server', true)
                break
        }

    }
};

Blockly.JavaScript[blockName] = function (block) {
    let option = block.getFieldValue('option');
    let code = ''

    switch (option) {
        case "MESSAGE":
            code = 's4dmessage'
            break

        case "CHANNEL":
            code = 's4dmessage.channel'
            break

        case "CATEGORY":
            code = 's4dmessage.channel.parent'
            break

        case "SERVER":
            code = 's4dmessage.guild'
            break
    }

    return [code, Blockly.JavaScript.ORDER_NONE];
};

registerRestrictions(blockName, [
    {
        type: "toplevelparent",
        message: "RES_MUST_BE_IN_ON_MESSAGE",
        types: [
            "s4d_on_message_typing_event",
        ]
    }
]);
