import Blockly from "blockly/core";

const blockName = "inv_list_foreach_element";

const blockData = {
  "message0": "current element on foreach",
  "args0": [],
  "inputsInline": true,
  "output": null,
  "colour": "#745ba5",
  "tooltip": "Element currently being selected (for the foreach list block)",
  "helpUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
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
