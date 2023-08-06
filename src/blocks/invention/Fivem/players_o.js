import Blockly from "blockly/core";

const blockName = "inv_fivem_players_o";

const blockData = {
  "message0": "players",
  "colour": "#CC8899",
  "tooltip": "players in the server",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var code = `__S4D__players`;
  return [code, Blockly.javascript.ORDER_NONE];
};
