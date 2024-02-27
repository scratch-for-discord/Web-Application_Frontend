import * as Blockly from "blockly/core";

const blockName = "monaco_edit_permissions";


const blockData = {
    "message0": "in channel %1 %2 permissions to member/role with id %3 %4",
    "args0": [
       {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    },
    {
     "type": "field_dropdown",
      "name": "action",
      "options": [
        [
          "allow",
          "allow"
        ],
        [
          "deny",
          "deny"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "member",
      "check": "String"
    },
    {
      "type": "input_statement",
      "name": "then"
    }
    ],
    "colour": "#4C97FF",
"previousStatement": null,
"nextStatement": null,
    "tooltip": "Edit more than one permission of a role/member.",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['monaco_edit_permissions'] = function(block) {
  var value_channel = Blockly.JavaScript.valueToCode(block, 'channel', Blockly.JavaScript.ORDER_ATOMIC);
  var value_action = Blockly.JavaScript.valueToCode(block, 'action', Blockly.JavaScript.ORDER_ATOMIC);
  var value_member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC);
  var statements = Blockly.JavaScript.statementToCode(block, 'then');
  // TODO: Assemble JavaScript into code variable.
  var guilder = `s4d.clients.channels.cache.get('${value_channel}').edit(
    {
    PermissionOverwrites:
    id: '${value_member}',
    ${value_action}: [
${statements}
    ]
    })`;
  return guilder;
};
