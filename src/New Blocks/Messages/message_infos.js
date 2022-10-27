import * as Blockly from "blockly"
import { registerRestrictions } from "../../restrictions";

const blockName = 's4d_message_infos'

const blockData = {
    "type": "s4d_message_infos",
    "message0": "%1",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "option",
            "options": [
                [
                    "Message Content",
                    "CONTENT"
                ],
                [
                    "Message ID",
                    "ID"
                ],
                [
                    "Message timestamp",
                    "TIMESTAMP"
                ],
                [
                    "Message author",
                    "AUTHOR"
                ],
                [
                    "Mentionned member",
                    "MM"
                ],
                [
                    "Mentionned channel",
                    "MC"
                ],
                [
                    "Mentionned role",
                    "MR"
                ]
            ]
        }
    ],
    "output": 'String',
    "colour": '#5ba58c',
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
            case 'CONTENT':
                BlockValuesSet('#5ba58c', 'String', true)
                break
            case 'ID':
                BlockValuesSet('#5ba58c', 'String', true)
                break
            case 'TIMESTAMP':
                BlockValuesSet('#5b67a5', 'Number', true)
                break
            case 'AUTHOR':
                BlockValuesSet('#a55b80', 'GuildMember', true)
                break
            case 'MM':
                BlockValuesSet('#a55b80', 'GuildMember', true)
                break
            case 'MC':
                BlockValuesSet('#a55b80', 'Channel', true)
                break
            case 'MR':
                BlockValuesSet('#6cb5e6', 'Role', true)
                break

        }
    }
}

Blockly.JavaScript[blockName] = function (block) {
    const option = block.getFieldValue('option');
    let code = ``

    switch (option) {
        case 'CONTENT':
            code = 's4dmessage.content'
            break
        case 'ID':
            code = 's4dmessage.id'
            break
        case 'TIMESTAMP':
            code = 's4dmessage.createdTimestamp'
            break
        case 'AUTHOR':
            code = 's4dmessage.author'
            break
        case 'MM':
            code = 's4dmessage.mentions.members.first()'
            break
        case 'MC':
            code = 's4dmessage.mentions.channels.first()'
            break
        case 'MR':
            code = 's4dmessage.mentions.roles.first()'
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
