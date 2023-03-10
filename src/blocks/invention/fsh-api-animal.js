import Blockly from "blockly/core";

Blockly.Blocks["inv_fsh_api_animal"] = {
  init: function () {
    this.jsonInit({
      "message0": "get %1 image from fsh api",
      "args0": [
        {
          "type": "field_input",
          "name": "type",
          "text": "cat"
        }
      ],
      "output": "String",
      "colour": '#50494e',
      "tooltip": "Get's random animal picture (link) from fsh api",
      "helpUrl": "https://fsh-bot.frostzzone.repl.co/api/animal"
    });
  }
};

Blockly.JavaScript['inv_fshapi_animal'] = function(block) {
  var text_type = block.getFieldValue('type');
  // TODO: Assemble JavaScript into code variable.
  var code = `await async(){
let veryLongVarSoN0Conflicts;
https.get(('https://fsh-bot.frostzzone.repl.co/api/animal?animal=' + ${text_type}), async resp => {\nlet data2 = "";\nresp.on("data", async chunk => {data2 += chunk});\nresp.on("end", async () => {\nlet data = JSON.parse(data2)\nveryLongVarSoN0Conflicts = data.image;\n});\n})
return veryLongVarSoN0Conflicts;
}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
