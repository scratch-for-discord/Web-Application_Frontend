import Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript';

// Repeat forever
Blockly.defineBlocksWithJsonArray([{
  "type": "controls_repeat_forever",
  "message0": "repeat forever %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENT"
        }
    ],
    "colour": "#5BA55B",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
}])

javascriptGenerator['controls_repeat_forever'] = function (block: any) {
    return `
        while(s4d.client && s4d.client.token) {
            await delay(50);
            ${Blockly.JavaScript.statementToCode(block, 'STATEMENT')}
        }
    `;
};