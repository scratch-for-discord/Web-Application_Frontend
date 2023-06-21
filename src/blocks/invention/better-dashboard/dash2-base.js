import Blockly from "blockly/core";

const blockName = "inv/lars_soft_ui";

const blockData = {
  "message0": "Start Soft UI Dashboard with %1 Token %2 Client ID %3 Client Secret %4 Port %5 Domain %6 Redirect_Uri %7 %8 Dashboard License %9 Owner ID's %10 Style %11 %12 Inputs %13 %14",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "token"
      },
      {
        "type": "input_value",
        "name": "client_id"
      },
      {
        "type": "input_value",
        "name": "client_secret"
      },
      {
        "type": "input_value",
        "name": "port",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "domain"
      },
      {
        "type": "field_input",
        "name": "Redirect_Uri",
        "text": "/discord/callback"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "license"
      },
      {
        "type": "input_value",
        "name": "owner_array",
        "check": "Array"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "style"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "settings"
      }
    ],
    "inputsInline": false,
    "colour": 330,
    "tooltip": "",
    "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  /*var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var number_name = block.getFieldValue('NAME');
  var value_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
  var value_client_id = Blockly.JavaScript.valueToCode(block, 'client id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_client_secret = Blockly.JavaScript.valueToCode(block, 'client secret', Blockly.JavaScript.ORDER_ATOMIC);
  var value_email = Blockly.JavaScript.valueToCode(block, 'email', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop_color = block.getFieldValue('drop-color');*/
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
