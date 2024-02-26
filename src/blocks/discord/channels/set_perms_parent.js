import * as Blockly from "blockly/core";


const blockName = "set_perms_parent";

const blockData = {
    "message0": "%{BKY_C_PERM_P}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH",
            "options": [
                            ["CREATE_INSTANT_INVITE", "CREATE_INSTANT_INVITE"],
							["MANAGE_CHANNELS", "MANAGE_CHANNELS"],
							["ADD_REACTIONS", "ADD_REACTIONS"],
							["PRIORITY_SPEAKER", "PRIORITY_SPEAKER"],
							["STREAM", "STREAM"],
							["VIEW_CHANNEL", "VIEW_CHANNEL"],
							["SEND_MESSAGES", "SEND_MESSAGES"],
							["SEND_TTS_MESSAGES","SEND_TTS_MESSAGES"],
							["MANAGE_MESSAGES", "MANAGE_MESSAGES"],
							["EMBED_LINKS", "EMBED_LINKS"],
							["ATTACH_FILES", "ATTACH_FILES"],
							["READ_MESSAGE_HISTORY", "READ_MESSAGE_HISTORY"],
							["MENTION_EVERYONE", "MENTION_EVERYONE"],
							["USE_EXTERNAL_EMOJIS", "USE_EXTERNAL_EMOJIS"],
							["CONNECT", "CONNECT"],
							["SPEAK", "SPEAK"],
							["MUTE_MEMBERS", "MUTE_MEMBERS"],
							["DEAFEN_MEMBERS", "DEAFEN_MEMBERS"],
							["MOVE_MEMBERS", "MOVE_MEMBERS"],
							["USE_VAD", "USE_VAD"],
							["MANAGE_ROLES", "MANAGE_ROLES"],
							["MANAGE_WEBHOOKS", "MANAGE_WEBHOOKS"],
							["USE_APPLICATION_COMMANDS", "USE_APPLICATION_COMMANDS"],
							["REQUEST_TO_SPEAK", "REQUEST_TO_SPEAK"],
							["MANAGE_EVENTS", "MANAGE_EVENTS"],
							["MANAGE_THREADS", "MANAGE_THREADS"],
							["CREATE_PUBLIC_THREADS", "CREATE_PUBLIC_THREADS"],
							["CREATE_PRIVATE_THREADS", "CREATE_PRIVATE_THREADS"],
							["USE_EXTERNAL_STICKERS", "USE_EXTERNAL_STICKERS"],
							["SEND_MESSAGES_IN_THREADS", "SEND_MESSAGES_IN_THREADS"],
							["USE_EMBEDDED_ACTIVITIES", "USE_EMBEDDED_ACTIVITIES"],
							["USE_SOUNDBOARD", "USE_SOUNDBOARD"],
							["CREATE_EVENTS", "CREATE_EVENTS"],
							["USE_EXTERNAL_SOUNDS", "USE_EXTERNAL_SOUNDS"],
							["SEND_VOICE_MESSAGES", '"SEND_VOICE_MESSAGES"] 
            ]
        }
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const searchType = block.getFieldValue("SEARCH");
    const code = `Permissions.FLAGS.${searchType},`
    return code;

};
