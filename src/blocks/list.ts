import Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript';

// In list () push
Blockly.defineBlocksWithJsonArray([{
  "type": "push_to_list",
  "message0": "in list %1 push %2",
    "args0": [
        {
            "type": "input_value",
            "name": "LIST",
            "check":"Array"
        },
        {
            "type": "input_value",
            "name": "PUSH",
            "check":["Number","String","Member","Channel","Array","Boolean","Role","Server"]
        },
    ],
    "colour": "%{BKY_LISTS_HUE}",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": "",
}])

javascriptGenerator['push_to_list'] = function (block: any) {
    const list = Blockly.JavaScript.valueToCode(block, "LIST", Blockly.JavaScript.ORDER_ATOMIC);
    const push = Blockly.JavaScript.valueToCode(block, "PUSH", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${list}.push(${push});\n`
    return code;
};

// List matches from RegEx () on text()
Blockly.defineBlocksWithJsonArray([{
  "type": "lists_regex_list_of_matches_from_regex_on_text",
  "message0": "list of matches from RegEx %1 on text %2",
  "args0": [
      {
          "type": "input_value",
          "name": "REGEX",
          "check": "RegEx"
      },
      {
          "type": "input_value",
          "name": "TEXT",
          "check": "String"
      }
  ],
  "inputsInline": true,
  "colour": "%{BKY_LISTS_HUE}",
  "output": ["List", "Array"],
  "tooltip": "RegEx is a regular expression that can be used to find text inside of text with a couple checks to make sure that text is exactly the way you want it. This block outputs a list of matches from the RegEx being used on the text.",
  "helpUrl": "",
}])

javascriptGenerator['lists_regex_list_of_matches_from_regex_on_text'] = function (block: any) {
    const regex = Blockly.JavaScript.valueToCode(block, "REGEX", Blockly.JavaScript.ORDER_ATOMIC);
    const text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_ATOMIC);
    const code = [`String(${text}).match(${regex})`, Blockly.JavaScript.ORDER_ATOMIC];
    return code;
};