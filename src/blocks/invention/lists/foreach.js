import Blockly from "blockly/core";

const blockName = "inv_list_foreach";

const blockData = "message0": "for each in list %1 do %2",
  "args0": [
    {
      "type": "input_value",
      "name": "one",
      "check": "Array"
    },
    {
      "type": "input_statement",
      "name": "two"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#745ba5",
  "tooltip": "Same as the one in loops category but code different",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var value_one = Blockly.JavaScript.valueToCode(block, 'one', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_two = Blockly.JavaScript.statementToCode(block, 'two');

  var code = `${value_one}.forEach(element => {
    ${statements_two}
  })`;
  return code;
};
