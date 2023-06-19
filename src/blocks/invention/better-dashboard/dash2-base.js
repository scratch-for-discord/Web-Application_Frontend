import Blockly from "blockly/core";

const blockName = "inv/lars_soft_ui";

const blockData = {
  "message0": "Start SoftUI Dashboard with %1 Name %2 Port %3 %4 Token %5 Client ID %6 Client Secret %7 Support Email %8 Color Scheme %9",
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
      "name": "NAME",
      "value": 0
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
        ]
      ]
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

Blockly.JavaScript['soft_ui_dashboard'] = function() {
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
