import Blockly from "blockly/core";

const blockName = "inv_fivem_host";

const blockData = {
  "message0": "server host",
  "output": "String",
  "colour": "#CC8899",
  "tooltip": "Host of server",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  var code = `__S4D__fivem_server.host`;
  return [code, Blockly.javascript.ORDER_NONE];
};
