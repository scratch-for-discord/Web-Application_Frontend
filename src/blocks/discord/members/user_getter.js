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
            this.setColour(color)
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
                    BlockValuesSet('user_getter', '#5ba58c', 'String', true,
                        ["main_text", "On the user"], ["secondary_text", "get his"], ["tertiary_text", ""])

                } else if (drpVlu == '.client') {
                    BlockValuesSet('user_getter', '#187795', null, true,
                        ["main_text", "On the user"], ["secondary_text", "get his"], ["tertiary_text", "info"])

                } else if (drpVlu == '.dmChannel' || drpVlu == '.flags') {
                    BlockValuesSet('user_getter', '#a55b80', null, true,
                        ["main_text", "On the user"], ["secondary_text", "get his"], ["tertiary_text", ""])

                } else {
                    BlockValuesSet('user_getter', '#5b67a5', 'Number', true,
                        ["main_text", "On the user"], ["secondary_text", "get his"], ["tertiary_text", ""])
                }
                break

            case ".bot": case ".system": //bool output
                BlockValuesSet('user_getter', '#5b80a5', 'Boolean', true,
                    ["main_text", "Is the user"], ["secondary_text", "a"], ["tertiary_text", "account?"])
                break

            case "EXISTS":
                BlockValuesSet('user_getter', '#5b80a5', 'Boolean', true,
                    ["main_text", "Does the user"], ["secondary_text", ""], ["tertiary_text", "?"])
                break

            case ".bannable": case ".kickable": case ".moderatable": case ".partial": case ".pending":
            case ".manageable":
                BlockValuesSet('user_getter', '#5b80a5', 'Boolean', true,
                    ["main_text", "Is the user"], ["secondary_text", ""], ["tertiary_text", "?"])
                if (drpVlu == '.pending') this.getField("main_text").setValue("Did the user")
                break

            default: // default aka Number Value (for now accent color is the default)
                BlockValuesSet('user_getter', '#5b67a5', 'Number', true,
                    ["main_text", "On the user"], ["secondary_text", "get his"], ["tertiary_text", ""])
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
