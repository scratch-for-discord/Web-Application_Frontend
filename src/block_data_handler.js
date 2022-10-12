import * as Blockly from 'blockly/core';


export let BlockValuesSet = (blockName, color, output, outputBool, label1, label2, label3) => {

    console.table(blockName, color, output, outputBool, label1, label2, label3)
    console.warn('Started the function')
    Blockly.Blocks[blockName].init = function () {
        console.warn('Went in the onchange event')
        //onchange: function () {

        if (color != null) this.setColour(color)

        if (output == null) {
            this.setOutput(outputBool)
        } else {
            this.setOutput(outputBool, output)
        }

        if (label1 != null) this.getField(label1[0]).setValue(label1[1])
        if (label2 != null) this.getField(label2[0]).setValue(label1[2])
        if (label3 != null) this.getField(label3[0]).setValue(label1[3])
        console.warn('Finished The Set Of Actions')
    }
    console.warn('Finished The Function')
}
