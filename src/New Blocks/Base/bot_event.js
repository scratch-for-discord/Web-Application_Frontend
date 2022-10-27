import * as Blockly from "blockly/core";

const blockName = 'on_bot_code_start'

const blockData = {
    "type": "on_bot_code_start",
    "message0": "%1 %2 %3 %4",
    "args0": [
        {
            "type": "field_label_serializable",
            "name": "main_text",
            "text": "When the"
        },
        {
            "type": "field_dropdown",
            "name": "event",
            "options": [
                [
                    "bot is connected",
                    "bot"
                ],
                [
                    "code runs",
                    "code"
                ]
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
    "colour": '#F5AB1A',
    "tooltip": "Runs whenever the bot starts or when the code starts",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
}

Blockly.JavaScript[blockName] = function (block) {
    var event = block.getFieldValue('event');
    var toCode = Blockly.JavaScript.statementToCode(block, 'code');
    var code = ''
    if (event == 'bot') {
        code = `s4d.client.on('ready', async () => {\n${toCode}\n});\n`;
    } else if (event != 'bot') {
        code = `\n${toCode}\n`
    }
    return code;
};

