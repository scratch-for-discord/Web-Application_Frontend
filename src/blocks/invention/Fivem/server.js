import Blockly from "blockly/core";

const blockName = "inv_fivem_server";

const blockData = {
  "message0": "Connect to fivem server %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "colour": "#CC8899",
  "tooltip": "Connects to a fivem server",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.Order.ATOMIC);
  var code = `const __S4D__fivem_server = new __S4D__fivem.DiscordFivemApi("${value_name}")`;
  return code;
};
