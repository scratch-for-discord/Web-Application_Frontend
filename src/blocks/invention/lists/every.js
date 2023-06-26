import Blockly from "blockly/core";

const blockName = "inv_list_concat";

const blockData = {
  "message0": "on %1 every value follows %2 ?",
  "args0": [
    {
      "type": "input_value",
      "name": "one",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "two",
      "check": "Boolean"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 270,
  "tooltip": "Tells you if every element on the list follows a test (boolean)",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var value_one = Blockly.JavaScript.valueToCode(block, 'one', Blockly.JavaScript.ORDER_ATOMIC);
  var value_two = Blockly.JavaScript.valueToCode(block, 'two', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_one}.every(value_two)`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
