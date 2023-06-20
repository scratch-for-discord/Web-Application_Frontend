import Blockly from "blockly/core";

const blockName = "inv/lars_soft_ui_text_input";

const blockData = {
  "message0": "Add new Text Input %1 Name %2 ID %3 Description %4 Placeholder %5 Minimum Characters %6 Maximum Characters %7 Disabled %8 Required %9 Set default input to %10 When user changes value %11 %12",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "name"
    },
    {
      "type": "input_value",
      "name": "id"
    },
    {
      "type": "input_value",
      "name": "description"
    },
    {
      "type": "input_value",
      "name": "placeholder"
    },
    {
      "type": "input_value",
      "name": "min",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "max",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "disabled",
      "check": "Boolean"
    },
    {
      "type": "input_value",
      "name": "required",
      "check": "Boolean"
    },
    {
      "type": "input_value",
      "name": "current",
      "check": "Boolean"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NewValue"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  var value_description = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);
  var value_placeholder = Blockly.JavaScript.valueToCode(block, 'placeholder', Blockly.JavaScript.ORDER_ATOMIC);
  var value_min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);
  var value_disabled = Blockly.JavaScript.valueToCode(block, 'disabled', Blockly.JavaScript.ORDER_ATOMIC);
  var value_required = Blockly.JavaScript.valueToCode(block, 'required', Blockly.JavaScript.ORDER_ATOMIC);
  var value_current = Blockly.JavaScript.valueToCode(block, 'current', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_newvalue = Blockly.JavaScript.statementToCode(block, 'NewValue');
  // TODO: Assemble JavaScript into code variable.
  var code = `{
    optionId: '${value_id}',
    optionName: "${value_name}",
    optionDescription: "${value_description}",
    optionType: DBD.formTypes.input('${value_placeholder}', ${value_min}, ${value_max}, ${value_disabled}, ${value_required}),
    getActualSet: async ({guild}) => {
        return ${value_current};
    },
    setNew: async ({guild,newData}) => {
        ${statements_newvalue}
        return;
    }
},`;
  return code;
};
