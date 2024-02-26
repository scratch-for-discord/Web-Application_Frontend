import Blockly from "blockly/core";

const blockName = "inv_fivem_ip";

const blockData = {
  "message0": "server ip",
  "output": "String",
  "colour": "#CC8899",
  "tooltip": "Ip of server",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  var code = `__S4D__fivem_server.ip`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
