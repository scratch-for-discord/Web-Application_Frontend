import Blockly from "blockly/core";

const blockName = "inv_list_every_element";

const blockData = {
  "message0": "every index",
  "args0": [],
  "inputsInline": true,
  "output": "String",
  "colour": 270,
  "tooltip": "Index of the element currently being selected (for the every list block)",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  var code = `index`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
