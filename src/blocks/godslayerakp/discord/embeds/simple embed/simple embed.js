import Blockly from "blockly/core"; 
const loadInputWithBlock = (input, block) => {
    const connection = input.connection
    if (input.connection.targetConnection) return
    const inputBlock = input.sourceBlock_.workspace.newBlock(block)
    inputBlock.initSvg()
    inputBlock.render()
    connection.connect(inputBlock.outputConnection)
}
const blockName = "gsa_simple_embed";
const inputs = [
    {
        "name": "message",
        "text": "message",
        "type": "String",
        "id": "message",
        export: function(block) {
            return `content: String(${Blockly.JavaScript.valueToCode(block, this.id, Blockly.JavaScript.ORDER_NONE)}), `
        }
    },
    {
        "name": "color",
        "text": "color",
        "type": [
            "String",
            "Colour"
        ],
        "id": "color",
        export: function(block) {
            return `color: String(${Blockly.JavaScript.valueToCode(block, this.id, Blockly.JavaScript.ORDER_NONE)}), \n`
        }
    },
    {
        "name": "title",
        "text": "title",
        "type": "String",
        "id": "title",
        export: function(block) {
            return `title: String(${Blockly.JavaScript.valueToCode(block, this.id, Blockly.JavaScript.ORDER_NONE)}), \n`
        }
    },
    {
        "name": "url",
        "text": "url",
        "type": "String",
        "id": "url",
        export: function(block) {
            return `url: String(${Blockly.JavaScript.valueToCode(block, this.id, Blockly.JavaScript.ORDER_NONE)}), \n`
        }
    },
    {
        "name": "author:",
        "text": "author:",
        "type": "gsa_set_simple_embed_author",
        "id": "author",
        onUse: function() {
            loadInputWithBlock(this.getInput('author'), 'gsa_set_simple_embed_author')
        },
        export: function(block) {
            return Blockly.JavaScript.valueToCode(block, this.id, Blockly.JavaScript.ORDER_ATOMIC)
        }
    },
    {
        "name": "description",
        "text": "description",
        "type": "String",
        "id": "description",
        export: function(block) {
            return `description: String(${Blockly.JavaScript.valueToCode(block, this.id, Blockly.JavaScript.ORDER_NONE)}), \n`
        }
    },
    {
        "name": "thumbnail",
        "text": "thumbnail",
        "type": "String",
        "id": "thumbnail",
        export: function(block) {
            return `thumbnail: {
                url: String(${Blockly.JavaScript.valueToCode(block, this.id, Blockly.JavaScript.ORDER_NONE)})
            }, \n`
        }
    },
    {
        "name": "fields:",
        "text": "fields:",
        "type": "gsa_create_simple_embed_fields",
        "id": "fields",
        onUse: function() {
            loadInputWithBlock(this.getInput('fields'), 'gsa_create_simple_embed_fields')
        },
        export: function(block) {
            return Blockly.JavaScript.valueToCode(block, this.id, Blockly.JavaScript.ORDER_ATOMIC)
        }
    },
    {
        "name": "image",
        "text": "image",
        "type": "String",
        "id": "image",
        export: function(block) {
            return `image: {
                url: String(${Blockly.JavaScript.valueToCode(block, this.id, Blockly.JavaScript.ORDER_NONE)})
            }, \n`
        }
    },
    {
        "name": "timestamp",
        "text": "timestamp",
        "type": "String",
        "id": "timestamp",
        export: function(block) {
            return `timestamp: new date(String(${Blockly.JavaScript.valueToCode(block, this.id, Blockly.JavaScript.ORDER_NONE)})),`
        }
    },
    {
        "name": "footer:",
        "text": "footer:",
        "type": "gsa_set_simple_embed_footer",
        "id": "footer",
        onUse: function() {
            loadInputWithBlock(this.getInput('footer'), 'gsa_set_simple_embed_footer')
        },
        export: function(block) {
            return Blockly.JavaScript.valueToCode(block, this.id, Blockly.JavaScript.ORDER_ATOMIC)
        }
    }
]
const findInputDataFor = (name) => inputs.find(input => input.id === name)
const blockData = {
    "message0": "simple embed",
    "args0": [],
    "colour": '#40BF4A',
    "output": 'MessageEmbed',
};

const menuName = `${blockName}_mutator_menu`
Blockly.Blocks[menuName] = {
    init: function () {
        this.setColour(blockData.colour);
        this.setHelpUrl("");
    }
};
Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
        this.setMutator(new Blockly.Mutator([]));
        this.connectionCache = {}
        this.inputs_ = []
    },
    mutationToDom: function () {
        const container = document.createElement("mutation");
        for (let i = 0; i < this.inputs_.length; i++) {
            container.setAttribute(this.inputs_[i], 'true')
        }
        return container;
    },

    domToMutation: function (xmlElement) {
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i]
            if (xmlElement.getAttribute(input.id) === "true") this.inputs_.push(input.id)
        }
        this.updateShape_();
    },

    decompose: function (workspace) {
        const containerBlock = workspace.newBlock(menuName);
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i]
            containerBlock.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(input.name)
                .appendField(new Blockly.FieldCheckbox(this.inputs_.includes(input.id) ? "TRUE" : "FALSE"), input.id);
        }
        containerBlock.initSvg();
        return containerBlock;
    },

    compose: function (containerBlock) {
        // Set states
        this.inputs_ = []
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i]
            if (containerBlock.getFieldValue(input.id) === "TRUE") {
                this.inputs_.push(input.id);
            }
        }
        this.updateShape_();
    },

    updateShape_: function () {
        for (let i = 0; i < inputs.length; i++) {
            const inputData = inputs[i]
            const input = this.getInput(inputData.id)
            if (!input) continue
            this.connectionCache[inputData.id] = input.targetConnection
            this.removeInput(inputData.id)
        }
        for (let index = 0; index < this.inputs_.length; index++) {
            const input = findInputDataFor(this.inputs_[index])
            const newInput = this.appendValueInput(input.id)
                .setCheck(input.type)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(input.text);
            const connection = newInput.connection
            if (this.connectionCache[input.id]) connection.connect(this.connectionCache[input.id])
            if (typeof input.onUse === 'function') input.onUse.apply(this)
        }
    }
};

Blockly.JavaScript[blockName] = function (block) {
    const exportValues = []
    let message = ''
    for (let i = 0; i < this.inputs_.length; i++) {
        const input = findInputDataFor(inputs[i])
        if (input.id === 'message') {
            message = input.export(block)
            continue
        }
        exportValues.push(input.export(block))
    }
    const code = `${message}embeds: [{${exportValues.join('')}}]`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};