import Blockly from "blockly/core";

const blockName = "inv/lars_soft_ui";

const blockData = {
  "message0": "Start SoftUI Dashboard with %1 Name %2 Port %3 %4 Token %5 License %6 Client ID %7 Client Secret %8 Support Email %9 Owner ID's %10 Color Scheme %11 %12 %13 %14 Define Card %15 Inputs %16",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "name"
    },
    {
      "type": "field_number",
      "name": "port",
      "value": 8080
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "token"
    },
    {
      "type": "input_value",
      "name": "license"
    },
    {
      "type": "input_value",
      "name": "client id"
    },
    {
      "type": "input_value",
      "name": "client secret"
    },
    {
      "type": "input_value",
      "name": "email"
    },
    {
      "type": "input_value",
      "name": "owner"
    },
    {
      "type": "field_dropdown",
      "name": "drop-color",
      "options": [
        [
          "dark",
          "dark"
        ],
        [
          "pink",
          "pink"
        ],
        [
          "blue",
          "blue"
        ],
        [
          "red",
          "red"
        ],
        [
          "green",
          "green"
        ],
        [
          "yellow",
          "yellow"
        ],
        [
          "custom...",
          "custom"
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "primary",
      "text": "primary hex"
    },
    {
      "type": "field_input",
      "name": "secondary",
      "text": "secondary hex"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "card"
    },
    {
      "type": "input_statement",
      "name": "input"
    }
  ],
  "inputsInline": false,
  "colour": 345,
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
