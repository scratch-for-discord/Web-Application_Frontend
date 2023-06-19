import Blockly from "blockly/core";

const blockName = "inv/lars_soft_ui";

const blockData = {
  "message0": "Start SoftUI Dashboard with %1 Name %2 Token %3 Client ID %4 Client Secret %5 Styling %6 Color Scheme %7",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME"
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
      "type": "input_dummy"
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
  "nextStatement": null,
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
  var value_client_id = Blockly.JavaScript.valueToCode(block, 'client id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_client_secret = Blockly.JavaScript.valueToCode(block, 'client secret', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop_color = block.getFieldValue('drop-color');
  // TODO: Assemble JavaScript into code variable.
  var code = `// temp`;
  return code;
};
