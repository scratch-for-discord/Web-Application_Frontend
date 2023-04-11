import Blockly from "blockly/core";

const blockName = "inv_fsh_api_censor";

const blockData = {
  "message0": "in text %1 censor bad words",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "output": "String",
  "colour": "#1a75ba",
  "tooltip": "Responds with censored version of text inputed",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  //value_url = encodeURIComponent(value_url.toLowerCase());

  var code = `await _S4D_inventionFSHapi('censor?text=', value_url)`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};
