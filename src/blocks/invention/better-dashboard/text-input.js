import Blockly from "blockly/core";

const blockName = "inv/lars_soft_ui_text_input";

const blockData = {
  "message0": "Add Text Input %1 Name %2 ID %3 Description %4 Set default input to %5 When user changes value %6 %7",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "Name"
    },
    {
      "type": "input_value",
      "name": "ID"
    },
    {
      "type": "input_value",
      "name": "Description"
    },
    {
      "type": "input_value",
      "name": "default"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "new value"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
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
