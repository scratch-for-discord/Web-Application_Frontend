import Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript'

// When bot starts event
Blockly.defineBlocksWithJsonArray ([{
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
}])

javascriptGenerator['on_bot_code_start'] = function (block: any) {
    var event = block.getFieldValue('event');
    var toCode = javascriptGenerator.statementToCode(block, 'code');
    var code: string = event == 'bot'
        ? code = `s4d.client.on('ready', async () => {\n${toCode}\n});\n`
        : code = `\n${toCode}\n`
    ;
    return code;
};

// Bot's info

const s4d_bot_amount_info_data = {
    "type": "bot_amount_info",
    "message0": "Bot's %1",
    "args0": [{
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
        }],
    "colour": "#4C97FF",
    "output": "String",
    "inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks['bot_amount_info'] = {
    init: function () {
        this.jsonInit(s4d_bot_amount_info_data);
    },
    onchange: function () {
        const getter = this.getFieldValue("getter");
        let BlockValuesSet = (color: string, output: string, outputBool: boolean) => {
            this.setColour(color);
            output!=null ? this.setOutput(outputBool, output) : this.setOutput(outputBool);
        }
        BlockValuesSet('#5b67a5', getter=='startup'?'Date':'Number', true);
    }
}

javascriptGenerator['bot_amount_info'] = function (block: any) {
    const getter: string = block.getFieldValue("getter");
    let code: string = "";
    switch (getter) {
        case 'pings':
            code = "s4d.client.ws.ping";
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
            code = "String(s4d.client.readyAt)";
            break

        case 'timsetamp':
            code = 's4d.client.readyTimestamp';
            break
    }
    return [code, javascriptGenerator.ORDER_NONE];
};

// Bot Shutdown

Blockly.defineBlocksWithJsonArray([
    {
        "type": "bot_shutdown_stop",
        "message0": "Shutdown the bot",
        "colour": "#4C97FF",
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "Litterally shutdowns the bot",
        "helpUrl": ""
    }
])

javascriptGenerator['bot_shutdown_stop'] = function () {
    const code = `s4d.client.destroy();\n`;
    return code;
};

// Bot Status && Stream

const s4d_set_bot_game_stream_data = {
    "type": "set_bot_game_stream",
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
}

Blockly.Blocks['set_bot_game_stream'] = {
    validate: function (newValue: any) {
        this.getSourceBlock().updateConnections(newValue);
        return newValue;
    },

    init: function () {
        this.jsonInit(s4d_set_bot_game_stream_data);
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
        ];
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(options, this.validate), 'TYPE')
        ;
    },
    
    updateConnections: function (newValue: any) {
        this.removeInput('URL', /* no error */ true);
        if (newValue == 'STREAMING') {
            this.appendValueInput('URL')
                .appendField(new Blockly.FieldLabelSerializable("with URL"), "url_text")
            ;
        }
    }

};

javascriptGenerator['set_bot_game_stream'] = function (block: any) {
    const type = block.getFieldValue("TYPE");
    const game = javascriptGenerator.valueToCode(block, "GAME", javascriptGenerator.ORDER_ATOMIC);
    const OIFD = block.getFieldValue("OIFD");
    let code = type == 'STREAMING'
        ? `s4d.client.user.setActivity( ${game}, { type:"STREAMING", url: ${javascriptGenerator.valueToCode(block, "URL", javascriptGenerator.ORDER_ATOMIC)} } );`
        : `s4d.client.user.setPresence({ status: "${OIFD}", activities: [{ name:${game},type:"${type}" }] });`
    ;
    return code;
};

// Env file

Blockly.defineBlocksWithJsonArray([{
    "type": "env",
    "message0": "process.env.%1",
    "colour": "#3333ff",
    "args0": [{
            "type": "input_value",
            "name": "VALUE",
            "check": "String"
    }],
    "tooltip": null,
    "output": ["String", "Env"],
    "helpUrl": ""
}]);

javascriptGenerator['env'] = function (block: any) {
    const value = javascriptGenerator.valueToCode(block, "VALUE", javascriptGenerator.ORDER_ATOMIC);
    const replacedValue = value.replace("'", '').replace("'", '');
    const code = [`process.env.${replacedValue}`, javascriptGenerator.ORDER_NONE];
    return code;
};
