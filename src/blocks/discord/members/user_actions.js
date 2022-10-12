import * as Blockly from 'blockly/core';
import "@blockly/field-grid-dropdown";

const blockName = 'member_actions'

const blockData = {
    "type": "member_actions",
    "message0": "%1 %2 %3 %4 %5 %6 %7 %8",
    "args0": [
        {
            "type": "field_label_serializable",
            "name": "main_text",
            "text": "On server"
        },
        {
            "type": "input_value",
            "name": "server"
        },
        {
            "type": "field_grid_dropdown",
            "name": "action",
            "options": [
                [
                    "ban",
                    ".ban"
                ],
                [
                    "kick",
                    ".kick"
                ],
                [
                    "unban",
                    ".unban"
                ],
                [
                    "timeout",
                    ".timeout"
                ],
                [
                    "set nickname",
                    ".setNickname"
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label_serializable",
            "name": "secondary_text",
            "text": "member"
        },
        {
            "type": "input_value",
            "name": "member"
        },
        {
            "type": "field_label_serializable",
            "name": "tertiary_text",
            "text": "with reason"
        },
        {
            "type": "input_value",
            "name": "reason"
        }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": '#4c97ff',
    "tooltip": "This block will perform the selected action on the selected user.",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }, onchange: function () {
        let BlockValuesSet = (color, output, outputBool, label1, label2, label3) => {
            this.setColour(color)
            if (output == '') {
                this.setOutput(outputBool)
            } else {
                this.setOutput(outputBool, output)
            }
            this.getField("main_text").setValue(label1)
            this.getField("secondary_text").setValue(label2)
            this.getField('tertiary_text').setValue(label3)
        }
    }
};

Blockly.JavaScript['member_actions'] = function (block) {
    let server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
    let action = block.getFieldValue('action');
    let member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
    let reason = Blockly.JavaScript.valueToCode(block, 'reason', Blockly.JavaScript.ORDER_ATOMIC);

    let code = '...;\n';
    return code;
};
