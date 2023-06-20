import Blockly from "blockly/core";

const blockName = "inv/lars_soft_ui_permissions";

const blockData = {
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "perm_drop",
      "options": [
        [
          "USE_VAD",
          "USE_VAD"
        ],
        [
          "CHANGE_NICKNAME",
          "CHANGE_NICKNAME"
        ],
        [
          "MANAGE_NICKNAMES",
          "MANAGE_NICKNAMES"
        ],
        [
          "MANAGE_ROLES",
          "MANAGE_ROLES"
        ],
        [
          "MANAGE_WEBHOOKS",
          "MANAGE_WEBHOOKS"
        ],
        [
          "MANAGE_EMOJIS_AND_STICKERS",
          "MANAGE_EMOJIS_AND_STICKERS"
        ],
        [
          "USE_APPLICATION_COMMANDS",
          "USE_APPLICATION_COMMANDS"
        ],
        [
          "REQUEST_TO_SPEAK",
          "REQUEST_TO_SPEAK"
        ],
        [
          "MANAGE_EVENTS",
          "MANAGE_EVENTS"
        ],
        [
          "MANAGE_THREADS",
          "MANAGE_THREADS"
        ],
        [
          "CREATE_PUBLIC_THREADS",
          "CREATE_PUBLIC_THREADS"
        ],
        [
          "CREATE_PRIVATE_THREADS",
          "CREATE_PRIVATE_THREADS"
        ],
        [
          "USE_EXTERNAL_STICKERS",
          "USE_EXTERNAL_STICKERS"
        ],
        [
          "SEND_MESSAGES_IN_THREADS",
          "SEND_MESSAGES_IN_THREADS"
        ],
        [
          "START_EMBEDDED_ACTIVITIES",
          "START_EMBEDDED_ACTIVITIES"
        ],
        [
          "MODERATE_MEMBERS",
          "MODERATE_MEMBERS"
        ],
        [
          "CREATE_INSTANT_INVITE",
          "CREATE_INSTANT_INVITE"
        ],
        [
          "KICK_MEMBERS",
          "KICK_MEMBERS"
        ],
        [
          "BAN_MEMBERS",
          "BAN_MEMBERS"
        ],
        [
          "ADMINISTRATOR",
          "ADMINISTRATOR"
        ],
        [
          "MANAGE_CHANNELS",
          "MANAGE_CHANNELS"
        ],
        [
          "MANAGE_GUILD",
          "MANAGE_GUILD"
        ],
        [
          "ADD_REACTIONS",
          "ADD_REACTIONS"
        ],
        [
          "VIEW_AUDIT_LOG",
          "VIEW_AUDIT_LOG"
        ],
        [
          "PRIORITY_SPEAKER",
          "PRIORITY_SPEAKER"
        ],
        [
          "STREAM",
          "STREAM"
        ],
        [
          "VIEW_CHANNEL",
          "VIEW_CHANNEL"
        ],
        [
          "SEND_MESSAGES",
          "SEND_MESSAGES"
        ],
        [
          "SEND_TTS_MESSAGES",
          "SEND_TTS_MESSAGES"
        ],
        [
          "MANAGE_MESSAGES",
          "MANAGE_MESSAGES"
        ],
        [
          "EMBED_LINKS",
          "EMBED_LINKS"
        ],
        [
          "ATTACH_FILES",
          "ATTACH_FILES"
        ],
        [
          "READ_MESSAGE_HISTORY",
          "READ_MESSAGE_HISTORY"
        ],
        [
          "MENTION_EVERYONE",
          "MENTION_EVERYONE"
        ],
        [
          "USE_EXTERNAL_EMOJIS",
          "USE_EXTERNAL_EMOJIS"
        ],
        [
          "VIEW_GUILD_INSIGHTS",
          "VIEW_GUILD_INSIGHTS"
        ],
        [
          "CONNECT",
          "CONNECT"
        ],
        [
          "SPEAK",
          "SPEAK"
        ],
        [
          "MUTE_MEMBERS",
          "MUTE_MEMBERS"
        ],
        [
          "DEAFEN_MEMBERS",
          "DEAFEN_MEMBERS"
        ],
        [
          "MOVE_MEMBERS",
          "MOVE_MEMBERS"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var dropdown_perm_drop = block.getFieldValue('perm_drop');
  
  var code = `DBD.DISCORD_FLAGS.Permissions.${dropdown_perm_drop}`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
