import * as Blockly from "blockly";

const blockName = "s4d_on_message_typing_event";

const blockData = {
    "message0": "When %1 %2 %3",
    "colour": "#f79400",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "event",
            "options": [
                [
                    "a message is received ",
                    "MESSAGE"
                ],
                [
                    "a message is received & author isn't a bot ",
                    "NOTBOT"
                ],
                [
                    "someone starts typing",
                    "TYPING"
                ],
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ]
};

Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const event = block.getFieldValue('event')
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    let code = ``

    if (event == 'MESSAGE') {
        code = `s4d.client.on('messageCreate', async (s4dmessage) => {\n${statements}\n});\n`;
    } else if (event == 'NOTBOT') {
        code = `s4d.client.on('messageCreate', async (s4dmessage) => {\nif (!s4dmessage.author.bot) {\n${statements}\n}\n});\n`;
    } else {
        code = `s4d.client.on('typingStart', async (s4dTyping) => {\n${statements}\n});\n`
    }
    return code;
};
