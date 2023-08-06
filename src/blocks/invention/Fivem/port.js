import Blockly from "blockly/core";

const blockName = "inv_fivem_port";

const blockData = {
  "message0": "server port",
  "output": "String",
  "colour": "#CC8899",
  "tooltip": "Port of server",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  var code = `__S4D__fivem_server.port`;
  return [code, Blockly.javascript.ORDER_NONE];
};
