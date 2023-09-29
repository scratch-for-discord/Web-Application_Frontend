import Blockly from "blockly";
import localforage from "localforage";
import Swal from "sweetalert2";
/* eslint-disable */

const DISABLED_EVENTS = [
  Blockly.Events.BUBBLE_OPEN,
  Blockly.Events.BUMP_EVENTS,
  Blockly.Events.CLICK,
  Blockly.Events.BLOCK_DRAG,
  Blockly.Events.FINISHED_LOADING,
  Blockly.Events.SELECTED,
  Blockly.Events.THEME_CHANGE,
  Blockly.Events.TOOLBOX_ITEM_SELECT,
  Blockly.Events.TRASHCAN_OPEN,
  Blockly.Events.UI,
  Blockly.Events.VIEWPORT_CHANGE,
];

export default async function register(self) {
  if (window.location.href.includes("scratch-for-discord.com")) {
    Swal.fire({
      title: "Move to s4d.discodes.xyz",
      html: "You are using the official Scratch For Discord editor, however this URL will soon be deleted so please use <a href='https://s4d.discodes.xyz/'>s4d.discodes.xyz</a> instead!",
      icon: "warning",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Ok",
      preConfirm: async () => {
        window.location.href = "https://s4d.discodes.xyz"
      },
    })
  }
  console.log('started!')
  setTimeout(async () => {
    const workspace = self.$store.state.workspace;
    const xml = await localforage.getItem("save3");
    if (xml !== null) {
      if (xml.length > 61) {
        Swal.fire({
          title: self.$t("autosave.title2"),
          html: "Did you not save your project before quitting Scratch For Discord? No problem, you can just click 'Load' to restore your project!",
          showDenyButton: true,
          icon: "question",
          denyButtonText: self.$t("autosave.cancell"),
          confirmButtonText: self.$t("autosave.confirm"),
          preConfirm: async () => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true
            })

            Toast.fire({
              icon: 'success',
              title: self.$t("autosave.text")
            })
            console.log('loaded a save!')
            const cb = await localforage.getItem("autosave_customBlocks")
            if (cb && cb != "[]") {
              await window.laodadfcusitomsoanblopocoocksooskfetchCustomBlocksocososc({ customBlocks: (typeof cb === "object" ? JSON.stringify(cb) : cb) })
            }
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
            const saveNickname = await localforage.getItem("autosaveName")
            document.querySelector("#docName").textContent = (saveNickname == null || saveNickname == "" ? "Untitled autosave" : saveNickname)
          },
        })
      }

    }
    workspace.addChangeListener((event) => {
      if (DISABLED_EVENTS.includes(event.type)) return;
      handle(workspace);
    });
  }, 1000)
}

async function handle(workspace) {
  console.log('saved changes...')
  const content = Blockly.Xml.domToPrettyText(Blockly.Xml.workspaceToDom(workspace));
  await localforage.setItem("save3", content);
  await localforage.setItem("autosaveName", document.querySelector("#docName").textContent)
  await localforage.setItem("autosave_customBlocks", JSON.stringify(window.saveCustomBlocksOutput))
}