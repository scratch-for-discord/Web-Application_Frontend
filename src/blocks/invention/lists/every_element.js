import Blockly from "blockly/core";

const blockName = "inv_list_every_element";

const blockData = {
  "message0": "current element on every",
  "args0": [],
  "inputsInline": true,
  "output": [
    "String",
    "Number"
  ],
  "colour": "#745ba5",
  "tooltip": "Element currently being selected (for the every list block)",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  var code = `element`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
