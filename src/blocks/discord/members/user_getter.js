import * as Blockly from 'blockly/core';
import "@blockly/field-grid-dropdown";

const blockName = 'user_getter'

const blockData = {
    "type": "user_getter",
    "message0": "%1 %5 %4 %2 %3 %6",
    "args0": [
        {
            "type": "field_label",
            "name": "main_text",
            "text": "",
        },
        {
            "type": "field_grid_dropdown",
            "name": "getter",
            "options": [
                [
                    "Accent color",
                    ".accentColor"
                ],
                [
                    "Avatar",
                    ".avatar"
                ],
                [
                    "Banner",
                    ".banner"
                ],
                [
                    "Bot",
                    ".bot"
                ],
                [
                    "Client",
                    ".client"
                ],
                [
                    "Creation date",
                    ".createdAt"
                ],
                [
                    "Creation timestamp",
                    ".creationTimestamp"
                ],
                [
                    "Avatar URL",
                    ".avatarUrl"
                ],
                [
                    "Discriminator",
                    ".discriminator"
                ],
                [
                    "DM channel",
                    ".dmChannel"
                ],
                [
                    "Flags",
                    ".flags"
                ],
                [
                    "Hex accent color",
                    ".hexAccentColor"
                ],
                [
                    "ID",
                    ".id"
                ],
                [
                    "System",
                    ".system"
                ],
                [
                    "Tag",
                    ".tag"
                ],
                [
                    "Username",
                    ".username"
                ],
                [
                    "Exist",
                    "EXISTS"
                ],
                [
                    "Bannable",
                    '.bannable'
                ],
                [
                    "Kickable",
                    '.kickable'
                ],
                [
                    "Managable",
                    '.manageable'
                ],
                [
                    "Moderatable",
                    '.moderatable'
                ],
                [
                    "Missing data",
                    '.partial'
                ],
                [
                    "Passed server's rules screen",
                    '.pending'
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_label",
            "name": "secondary_text",
            "text": "of user",
        },
        {
            "type": "input_value",
            "name": "member"
        }, {
            "type": "field_label",
            "name": "tertiary_text",
            "text": "of user",
        },
    ],
    "inputsInline": true,
    "output": null,
    "colour": 230,
    "tooltip": "This blocks gets the selected user data",
    "helpUrl": ""
}
Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
    }, onchange: function () {
        let drpVlu = this.getFieldValue('getter')
        let BlockValuesSet = (color, output, outputBool, label1, label2, label3) => {

            if (color != null) this.setColour(color)
            if (output == '') {
                this.setOutput(outputBool)
            } else {
                this.setOutput(outputBool, output)
            }
            this.getField("main_text").setValue(label1)
            this.getField("secondary_text").setValue(label2)
            this.getField('tertiary_text').setValue(label3)
        }
        switch (drpVlu) {
            case ".accentColor": case ".createdTimestamp": //Number Output
            case ".avatar": case ".banner": case ".avatarUrl": case ".discriminator":
            case ".hexAccentColor": case ".tag": case ".username": case ".createdAt": case ".id": //String Output
            case ".client":
            case ".dmChannel": case ".flags":

                if (drpVlu != '.accentColor' || drpVlu != '.createdTimestamp') {
                    BlockValuesSet('#5ba58c', 'String', true,
                        "On the user", "get his", "")

                } else if (drpVlu == '.client') {
                    BlockValuesSet('#187795', null, true,
                        "On the user", "get his", "info")

                } else if (drpVlu == '.dmChannel' || drpVlu == '.flags') {
                    BlockValuesSet('#a55b80', null, true,
                        "On the user", "get his", "")

                } else {
                    BlockValuesSet('#5b67a5', 'Number', true,
                        "On the user", "get his", "")
                }
                break

            case ".bot": case ".system": //bool output
                BlockValuesSet('#5b80a5', 'Boolean', true,
                    "Is the user", "a", "account?")
                break

            case "EXISTS":
                BlockValuesSet('#5b80a5', 'Boolean', true,
                    "Does the user", "", "?")
                break

            case ".bannable": case ".kickable": case ".moderatable": case ".partial": case ".pending":
            case ".manageable":
                BlockValuesSet('#5b80a5', 'Boolean', true,
                    "Is the user", "", "?")
                if (drpVlu == '.pending') this.getField("main_text").setValue("Did the user")
                break

            default: // default aka Number Value (for now accent color is the default)
                BlockValuesSet('#5b67a5', 'Number', true,
                    "On the user", "get his", "")
                break
        }
    }
}
Blockly.JavaScript[blockName] = function (block) {

    var property = block.getFieldValue('getter')
    var member = Blockly.JavaScript.valueToCode(block, 'member', Blockly.JavaScript.ORDER_ATOMIC)
    let code = ''

    if (property != 'EXISTS') {
        code = [`${member}${property}`, Blockly.JavaScript.ORDER_NONE]
    } else if (property == "EXISTS") {
        code = `typeof ${member} !== undefined`
    } else {
        code = `${member}.accentColor`
    }

    return [code, Blockly.JavaScript.ORDER_NONE];
};
