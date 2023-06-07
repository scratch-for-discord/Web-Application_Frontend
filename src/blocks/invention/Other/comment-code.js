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
  "colour": 60,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript['inv_chart_to_url'] = function() {
  // this is giving me pain
  var code = `chart.toURL()`;
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};
