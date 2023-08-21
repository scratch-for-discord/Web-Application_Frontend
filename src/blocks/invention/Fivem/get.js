import Blockly from "blockly/core";

const blockName = "inv_fivem_get";

const blockData = {
  "message0": "get %1 then %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "get",
      "options": [
        [
          "Server status",
          "getServerStatus"
        ],
        [
          "Players",
          "getPlayers"
        ],
        [
          "Players online",
          "getPlayersOnline"
        ],
        [
          "Max players",
          "getMaxPlayers"
        ],
        [
          "Server resources",
          "getServerResources"
        ],
        [
          "Server locale",
          "getServerLocale"
        ],
        [
          "Server version",
          "getServerVersion"
        ],
        [
          "Server tags",
          "getServerTags"
        ],
        [
          "License key (dangerous)",
          "getLicenseKey"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "then"
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
  var dropdown_get = block.getFieldValue('get');
  var statements_then = Blockly.JavaScript.statementToCode(block, 'then');
  var code = `eval(\`__S4D__fivem_server.${dropdown_get}().then(async(__S4D__${dropdown_get} => {
    ${statements_then}
  }))\`);`
  return code;
};
