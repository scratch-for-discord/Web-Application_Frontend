import Blockly from "blockly/core";

const blockName = "inv/lars_soft_ui_card";

const blockData = {
  "message0": "Set Card to %1 Category %2 Title %3 Description %4 Image (src) %5 Link %6 %7",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "category"
    },
    {
      "type": "input_value",
      "name": "title"
    },
    {
      "type": "input_value",
      "name": "description"
    },
    {
      "type": "input_value",
      "name": "image"
    },
    {
      "type": "input_value",
      "name": "link",
      "check": "Boolean"
    },
    {
      "type": "field_input",
      "name": "link",
      "text": "url"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "colour": 210,
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
