import Blockly from "blockly/core";

const blockName = "inv_fivem_players_o";

const blockData = {
  "message0": "players",
  "output": "Array",
  "colour": "#CC8899",
  "tooltip": "players in the server",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  var code = `__S4D__players`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
