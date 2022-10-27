import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../restrictions";

const blockName = "s4d_set_bot_game_stream";

const blockData = {
    "message0": "Set bot status to %2 with custom status %1 type",
    "args0": [
        {
            "type": "input_value",
            "name": "GAME",
            "check": ["Number", "String"]
        },
        {
            "type": "field_dropdown",
            "name": "OIFD",
            "options": [
                [
                    "Online",
                    "online"
                ],
                [
                    "Offline",
                    "offline"
                ],
                [
                    "Idle",
                    "idle"
                ],
                [
                    "DND",
                    "dnd"
                ]
            ]
        },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "tooltip": "Set your bot's stream/status.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    validate: function (newValue) {
        this.getSourceBlock().updateConnections(newValue);
        return newValue;
    },

    init: function () {
        this.jsonInit(blockData)
        let options = [
            [
                "Listening",
                "LISTENING"
            ],
            [
                "Watching",
                "WATCHING"
            ],
            [
                "Competing",
                "COMPETING"
            ],
            [
                "Playing",
                "PLAYING"
            ],
            [
                "Streaming",
                "STREAMING"
            ]
        ]
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(options, this.validate), 'TYPE');
    }, updateConnections: function (newValue) {
        this.removeInput('URL', /* no error */ true);
        if (newValue == 'STREAMING') {
            this.appendValueInput('URL')
                .appendField(new Blockly.FieldLabelSerializable("with URL"), "url_text")
        }
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const type = block.getFieldValue("TYPE");
    const game = Blockly.JavaScript.valueToCode(block, "GAME", Blockly.JavaScript.ORDER_ATOMIC);
    const OIFD = block.getFieldValue("OIFD");
    let code = ''
    if (type == 'STREAMING') {
        const url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC);
        code = `s4d.client.user.setActivity(${game}, { type: "STREAMING", url: ${url}});`;
    } else if (type != 'STREAMING')
        code = `s4d.client.user.setPresence({status: "${OIFD}",activities:[{name:${game},type:"${type}"}]}); \n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_MISSING_GAME",
        types: [
            "GAME"
        ]
    }
]);
