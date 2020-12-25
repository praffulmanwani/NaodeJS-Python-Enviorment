const form = document.getElementById("form")
const form2 = document.getElementById("form2")
const form3 = document.getElementById("form3")
const form4 = document.getElementById("form4")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const x = document.getElementById("x")
const y = document.getElementById("y")
const c = document.getElementById("c")
const x2 = document.getElementById("x2")
const y2 = document.getElementById("y2")
const c2 = document.getElementById("c2")
const x3 = document.getElementById("x3")
const y3 = document.getElementById("y3")
const x4 = document.getElementById("x4")
const y4 = document.getElementById("y4")
const c4 = document.getElementById("c4")
window.onscroll = function () { window.scrollTo(0, 0); };


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response // parses JSON response into native JavaScript objects
  }
async function hello(x1,x,y,c,z){
    var gk = await postData(z,{"x": x.value ,"y": y.value , "c": c.value })
    var nk = await gk.blob()
    x1.src = URL.createObjectURL(nk)
}
form.addEventListener("submit", (obj) => {
    obj.preventDefault()
    hello(img1,x,y,c,"/api/graph")
})
form2.addEventListener("submit", (obj) => {
    obj.preventDefault()
    hello(img2,x2,y2,c2,"/api/bar")
})
form3.addEventListener("submit", (obj) => {
    obj.preventDefault()
    hello(img3,x3,y3,"c","/api/pie")
})
form4.addEventListener("submit", (obj) => {
    obj.preventDefault()
    hello(img4,x4,y4,"r","/api/histo")
})