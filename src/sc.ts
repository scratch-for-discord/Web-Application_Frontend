import fetch from 'cross-fetch';
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code')


if (code) {
    console.log(code)

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
        console.log(res)
    })
})

}




export {}