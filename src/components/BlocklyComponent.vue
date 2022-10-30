<script setup lang="ts">
import { onMounted, ref, shallowRef } from "vue";
import Blockly from "blockly/core";


const props = defineProps(["options"]);
const blocklyToolbox = ref();
const blocklyDiv = ref();
const workspace = shallowRef();

defineExpose({ workspace });

onMounted(() => {
  const options = props.options || {};
  if (!options.toolbox) {
    options.toolbox = blocklyToolbox.value;

  }
  workspace.value = Blockly.inject(blocklyDiv.value, options);
});

// For styling the categories
class CustomCategory extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef: any, toolbox: any, opt_parent: any) {
    super(categoryDef, toolbox, opt_parent);
  }
  // /** @override */
  // addColourBorder_(colour:any) {
  //   this.rowDiv_.style.backgroundColor = colour;
  // }
}
Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory, true);



</script>

<template>
  <div>

    <div class="blocklyDiv" ref="blocklyDiv"></div>
    <xml ref="blocklyToolbox" style="display: none">
      <slot></slot>
    </xml>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
