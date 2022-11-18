<script setup lang="ts">
import { onMounted, ref, shallowRef } from "vue";
import Blockly from "blockly/core";
import Swal from "sweetalert2";


const props = defineProps(["options"]);
const blocklyToolbox = ref();
const blocklyDiv = ref();
const workspace = shallowRef();

defineExpose({ workspace });

function onFirstComment(event: any) {
  if (event.type == Blockly.Events.BLOCK_CREATE || event.type == Blockly.Events.BLOCK_DELETE || event.type == Blockly.Events.BLOCK_CHANGE || event.type == Blockly.Events.BLOCK_MOVE) {
    let code = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace())
    localStorage.setItem('workspaceCode', Blockly.Xml.domToText(code))
    console.log('Saved!')
  }
}

onMounted(() => {
  /*
  Blockly Injection
  */
  const options = props.options || {};
  if (!options.toolbox) {
    options.toolbox = blocklyToolbox.value;
  }
  workspace.value = Blockly.inject(blocklyDiv.value, options); // Injecting blockly
  Blockly.getMainWorkspace().addChangeListener(onFirstComment); // adding the event that triggers the save.

  /*
  saving Blocks 
  */
  let codeToLoad;
  if (localStorage.getItem('workspaceCode')) {
    codeToLoad = localStorage.getItem('workspaceCode')
  } else if (!localStorage.getItem('workspaceCode')) {
    localStorage.setItem('workspaceCode', '<xml xmlns="https://developers.google.com/blockly/xml"></xml>')
  }

  /*
  For styling the categoriess 
  */
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
    // That shit up there is if u want the whole category to be colored (I don't recommand, it does not work for me)
  }
  Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomCategory, true
  );

  /* 
  Loading the code on website load
   */
  if (localStorage.getItem('workspaceCode') != '<xml xmlns="https://developers.google.com/blockly/xml"></xml>') {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    Swal.fire({
      title: 'A save file has been detected!',
      text: "Do you want to load it?",
      icon: 'warning',
      confirmButtonText: 'Yes, Load it!',
      showCancelButton: true,
      cancelButtonText: 'No, cancel!',
      background: '#293448',
      color: '#fff',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        // Swal.fire({
        //   title: 'Loaded!',
        //   text: 'Your save file has been loaded',
        //   icon: 'success',
        //   background: '#293448',
        //   color: '#fff',
        // })
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: '#293448',
          color: '#fff',
        })

        Toast.fire({
          icon: 'success',
          title: 'Save File Loaded!'
        })
        // let code: string = `${localStorage.getItem('workspaceCode')}`
        let dom = Blockly.Xml.textToDom(String(localStorage.getItem('workspaceCode')))
        Blockly.getMainWorkspace().clear()
        Blockly.Xml.domToWorkspace(dom, Blockly.getMainWorkspace())
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        // Swal.fire({
        //   title: 'Cancelled',
        //   text: 'Your save file has not been loaded',
        //   icon: 'error',
        //   background: '#293448',
        //   color: '#fff',
        // })
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          background: '#293448',
          color: '#fff',
        })

        Toast.fire({
          icon: 'error',
          title: 'Save File Not Loaded!'
        })
        let dom = Blockly.Xml.textToDom('<xml xmlns="https://developers.google.com/blockly/xml"></xml>')
        Blockly.Xml.domToWorkspace(dom, Blockly.getMainWorkspace())
      }
    })
  }

});
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
