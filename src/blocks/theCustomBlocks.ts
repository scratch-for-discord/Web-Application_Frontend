import Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript';

Blockly.defineBlocksWithJsonArray([{
    "type": "string_length2",
    "message0": 'length of %1',
    "args0": [
        {
            "type": "input_value",
            "name": "VALUE",
            "check": "String"
        }
    ],
    "output": "Number",
    "colour": 160,
    "tooltip": "Returns number of letters in the provided text.",
    "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
}])


javascriptGenerator['string_length2'] = function (block: any) {
    var getString = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_NONE)
    let code: string = `console.log(${getString})`
    return [code, javascriptGenerator.ORDER_NONE]
}
