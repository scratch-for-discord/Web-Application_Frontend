import Blockly from "blockly/core";

const blockName = "inv_list_copywithin";

const blockData = {
  "message0": "copy within array %1 target %2 start %3 end %4",
  "args0": [
    {
      "type": "input_value",
      "name": "one",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "two",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "three",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "four",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Array",
  "colour": 270,
  "tooltip": "idk what this does use help url",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var value_one = Blockly.JavaScript.valueToCode(block, 'one', Blockly.JavaScript.ORDER_ATOMIC);
  var value_two = Blockly.JavaScript.valueToCode(block, 'two', Blockly.JavaScript.ORDER_ATOMIC);
  var value_three = Blockly.JavaScript.valueToCode(block, 'three', Blockly.JavaScript.ORDER_ATOMIC);
  var value_four = Blockly.JavaScript.valueToCode(block, 'four', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `${value_one}.copyWithin(${value_two}, ${value_three}, ${value_four})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
