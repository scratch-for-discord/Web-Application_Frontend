import Blockly from "blockly/core";

const blockName = "inv_comment_code";

const blockData = {
  "message0": "Collapse block %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": "#deb40d",
  "tooltip": "Block that makes it easy to collapse multiple block that you can't collapse at the same time",
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
