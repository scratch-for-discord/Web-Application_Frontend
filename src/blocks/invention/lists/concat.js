import Blockly from "blockly/core";

const blockName = "inv_list_concat";

const blockData = {
  "message0": "concat %1 and %2",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Array"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Array"
    }
  ],
  "inputsInline": true,
  "output": "Array",
  "colour": 270,
  "tooltip": "Returns a list that contains the elements of the imputed lists",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  return Blockly.JavaScript.statementToCode(block, 'NAME');
};
