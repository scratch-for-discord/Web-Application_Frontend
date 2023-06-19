import Blockly from "blockly/core";

const blockName = "inv_comment_code";

const blockData = {
  "message0": "Comment code, with comment %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "default"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": "#deb40d",
  "tooltip": "Makes code inside into a comment aka code no workie",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = `/*
  ${text_name}
  
  ${statements_name}
  */`;
  
  return code;
};
