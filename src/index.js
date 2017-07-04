let messages = require('./messages')

let newMessage = () => (`<p>${messages.hi} - ${messages.event}</p>`)

let app = document.getElementById('app')
app.innerHTML = newMessage()

if (module.hot) {
    module.hot.accept()
}