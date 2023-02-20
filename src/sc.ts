import fetch from 'cross-fetch';
var url = window.location.search
const urlParams = new URLSearchParams(url);
const code = urlParams.get('code')
import Blockly from 'blockly/core';
import base64 from 'base-64';
import Swal from "sweetalert2";


if (code) {
    var changeUrl: any = new URL(document.location.href);
    changeUrl.searchParams.delete('code');
    window.history.replaceState({}, document.title, changeUrl);
const body = {
    "code": code,
    "client_secret": import.meta.env.VITE_SEC,
    "client_id":     "b6d2e4d50218cbda081b",
    "redirect_uri":  "https://s4d.xl83.dev",
}

fetch('https://s4d-api.xl83.dev/api/v1/user/githubsc/', {
    method: 'POST',
    mode: "no-cors",
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json', "Accept": 'application/json'}
}).then(res => {
    res.json().then( res => {
        var code: string = res.code
        if (code) {
            localStorage.setItem("accessToken", res.code)
            localStorage.setItem("isTokenValid", "true")
            updateGitUi("show")
            fetch('https://api.github.com/user', {
                headers: {
                  Authorization: `token ${localStorage.getItem("accessToken")}`
                }
              })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    localStorage.setItem("userData", JSON.stringify(json))
                })
        } else {
            alert("There was a error, please refresh and try login again")
        }
    })
})

} else {
console.log("no code")
    if (localStorage.getItem("accessToken")) {
        fetch('https://api.github.com/user/repos', {
            headers: {
              Authorization: `token ${localStorage.getItem("accessToken")}`
            }
          })
            .then(res => res.json())
            .then(json => {
                if (json.message == "Bad credentials") {
                    localStorage.setItem("isTokenValid", "false")
                    updateGitUi("hide")
                } else {
                    updateGitUi("show")
                }
            });
    }
}

function updateGitUi(type: string) {
    var ui = document.getElementById("gitScUi")
    if (type == "show") {
       ui!.style.visibility = "visible"
    } else {
       ui!.style.visibility = "hidden"
    }
}

function push() {
var userDataString: any = localStorage.getItem("userData")
var userData = JSON.parse(userDataString)
var xmlDom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace())
var xml = Blockly.Xml.domToPrettyText(xmlDom)

var encodedContent = base64.encode(xml)

// Encode the file content as a base64 string


// Get the SHA of the file
fetch(`https://api.github.com/repos/${userData.login}/${localStorage.getItem("repo")}/contents/blocks.xml`, {
    headers: {
        Authorization: `token ${localStorage.getItem("accessToken")}`
    }
})
  .then(response => response.json())
  .then(fileData => {
    const sha = fileData.sha;

    // Send a PUT request to update the file
    fetch(fileData.url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `token ${localStorage.getItem("accessToken")}`
      },
      body: JSON.stringify({
        message: 'Updated file via S4D',
        content: encodedContent,
    sha: sha

      })
    })
    .then(response => {
      if (response.ok) {
        console.log('File updated successfully.');
      } else {
        response.json().then(resJson => {
            console.log(resJson)
            console.log(resJson.message)
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: resJson.message
              })
        })
      }
    })
    .catch(error => console.log(error));
  });
}

function pull() {
    var userDataString: any = localStorage.getItem("userData")
    console.log(userDataString)
    var userData = JSON.parse(userDataString)
    fetch(`https://api.github.com/repos/${userData.login}/${localStorage.getItem("repo")}/contents/blocks.xml`, {
                headers: {
                  Authorization: `token ${localStorage.getItem("accessToken")}`
                }
            }).then(res => res.json())
                .then(json => {
               var xml = base64.decode(json.content)
               let xmlDom = Blockly.Xml.textToDom(xml);
               Blockly.Xml.domToWorkspace(xmlDom, Blockly.getMainWorkspace());
            })
}


export { push, pull }