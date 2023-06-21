import Blockly from "blockly/core";

const blockName = "inv_html_body";

const blockData = {
  "message0": "body %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = `"<body>
    ${statements_name}
  </body>"`;
  return code;
};
