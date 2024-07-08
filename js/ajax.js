(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("ahr"),
        $fracment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;
        /* console.log(xhr); */

        if (xhr.status >= 200 && xhr.status < 300) {
            /* console.log("exito"); */
            let json = JSON.parse(xhr.responseText)
            /* console.log(json); */
            json.forEach(e => {
                let $li = document.createElement("li")
                $li.innerHTML = `${e.name} -- ${e.phone} -- ${e.email}`
                $fracment.appendChild($li)
            });
            $xhr.appendChild($fracment)
        } else {
            /* console.log("error"); */
            let message = xhr.statusText || "Ocurrio un error"
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }

    })
    /*  xhr.open("GET","https://jsonplaceholder.typicode.com/users") */
    xhr.open("GET", "/assets/users.json")
    xhr.send()
})();
(() => {
    const $fetch = document.getElementById("fetch"),
        $fracment = document.createDocumentFragment();
    fetch("https://jsonplaceholder.typicode.com/users")
    /* fetch("/assets/users.json") */
        /* .then((res) => {
            console.log(res)
          
            return res.ok ? res.json() : Promise.reject(res)
        }) */
        .then((res) => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            /* console.log(json) */
            json.forEach(e => {
                let $li = document.createElement("li")
                $li.innerHTML = `${e.name} -- ${e.phone} -- ${e.email}`
                $fracment.appendChild($li)
            });
            $fetch.appendChild($fracment)
        })
        .catch((err) => {
            /* console.log("error",err) */
            let message = err.statusText || "Ocurrio un error"
            $fetch.innerHTML = `Error ${err.status}: ${message}`
        })
        /* .finally(() => console.log("Se ejecutara independientemente de la respuesta")) */
})(),

(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();
    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/user"),
            json = await (res.ok ? res.json() : Promise.reject(res))
            /* console.log(res);
            console.log(json); */
            /* if(!res.ok) throw {status: res.status, statusText: res.statusText} */
            json.forEach(e => {
                let $li = document.createElement("li")
                $li.innerHTML = `${e.name} -- ${e.phone} -- ${e.email}`
                $fragment.appendChild($li)
            });
            $fetchAsync.appendChild($fragment)
        } catch (error) {
            console.log(error);
            let message = error.statusText || "Ocurrio un error"
            $fetchAsync.innerHTML = `Error ${error.status}: ${message}`
        }
    }
    getData()
})()