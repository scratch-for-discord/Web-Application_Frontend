import Blockly from "blockly/core";

const blockName = "inv_list_concat";

const blockData = {
  "message0": "concat %1 and %2",
  "args0": [
    {
      "type": "input_value",
      "name": "one",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "two",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "output": "Array",
  "colour": 270,
  "tooltip": "Returns a list that contains the elements of the imputed lists",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat"
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var value_one = Blockly.JavaScript.valueToCode(block, 'one', Blockly.JavaScript.ORDER_ATOMIC);
  var value_two = Blockly.JavaScript.valueToCode(block, 'two', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_one}.concat(${value_two})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
