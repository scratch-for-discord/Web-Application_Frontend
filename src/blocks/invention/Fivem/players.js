import Blockly from "blockly/core";

const blockName = "inv_fivem_players";

const blockData = {
  "message0": "Get players then %1 %2 if error %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "one"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "two"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#CC8899",
  "tooltip": "Gets players in the fivem server",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var statements_one = Blockly.JavaScript.statementToCode(block, 'one');
  var statements_two = Blockly.JavaScript.statementToCode(block, 'two');
  var code = `__S4D__fivem_server.getPlayers().then(async(__S4D__players) => {
  ${statements_one}
  }).catch((err) => {
  ${statements_two}
  });`;
  return code;
};
