import Blockly from "blockly/core";

const blockName = "inv_chart_to_url";

const blockData = {
  "type": "inv_chart_to_url",
  "message0": "chart url",
  "output": null,
  "colour": 75,
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
