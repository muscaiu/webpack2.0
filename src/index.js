import Button from './button'
let messages = require('./messages')

let app = document.getElementById('app')
let newMessage = () => (`<p>${messages.hi} - ${messages.event}</p>`)

console.log('index.js =========== OK')

app.innerHTML = (`
                    ${newMessage()}
                    ${Button.button}
                `)
Button.attachEl()

if (module.hot) { // declared true in dev-server.js
    module.hot.accept()
}
