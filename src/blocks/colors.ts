import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript'
import {ColorWheelField} from 'blockly-field-color-wheel';


// Color picker
const block = {
  "output": "Colour"
}

Blockly.Blocks["color_wheel_picker"] = {
  init: function () {
    this.jsonInit(block);
    this.appendDummyInput()
      .appendField(new ColorWheelField("#00FF00", 150, {
      layoutDirection: 'horizontal',
      }), "COLOR")
  }
};

javascriptGenerator['color_wheel_picker'] = function (block: any) {
    const color = block.getFieldValue("COLOR");
    const code = `'${color}'`
    return code;
};


// Color with hex code
Blockly.defineBlocksWithJsonArray([{
    "type": "color_hex",
    "message0": "color with hex %1",
    "args0": [
        {
            "type": "input_value",
            "name": "HEX",
            "check": "String"
        }
    ],
    "colour": '#a5745b',
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
}])

javascriptGenerator['color_hex'] = function (block: any) {
  const hex = Blockly.JavaScript.valueToCode(block, "HEX", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `'${hex}'`
    return code;
}