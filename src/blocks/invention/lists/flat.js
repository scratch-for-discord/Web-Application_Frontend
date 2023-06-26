import Blockly from "blockly/core";

const blockName = "inv_list_flat";

const blockData = {
  "message0": "flaten list %1 with depth %2",
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
  "output": "Array",
  "colour": "#745ba5",
  "tooltip": "Makes arrays stored as arrays part of the main array, depth is optional",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat"
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var value_one = Blockly.JavaScript.valueToCode(block, 'one', Blockly.JavaScript.ORDER_ATOMIC);
  var value_two = Blockly.JavaScript.valueToCode(block, 'two', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_one}.flat(${value_two})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
