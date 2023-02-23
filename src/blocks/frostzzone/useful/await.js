import Blockly from "blockly/core";

Blockly.Blocks["frost_await"] = {
  init: function () {
    this.jsonInit({
      "message0": "await %1",
      "args0": [
        {
          "type": "input_value",
          "name": "path"
        }
      ],
      "output": null,
      "inputsInline": true,
      "colour": '#D14081',
      "tooltip": "awaits code from block, search exclusive :O",
      "helpUrl": ""
    });
  }
};

Blockly.JavaScript["frost_await"] = function (block) {
  return [Blockly.JavaScript.valueToCode(block, "path", Blockly.JavaScript.ORDER_ATOMIC), Blockly.JavaScript.ORDER_ATOMIC];
}
