import Blockly from "blockly/core";

const blockName = "inv_channel_type";

const blockData = {
  "message0": "type of channel %1",
  "args0": [
    {
      "type": "input_value",
      "name": "Channel"
    }
  ],
  "output": "String",
  "colour": "#D14081",
  "tooltip": "Type of channel",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var value_channel = Blockly.JavaScript.valueToCode(block, 'Channel', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `${value_channel}.type`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
