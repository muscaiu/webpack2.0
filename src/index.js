let messages  = require('./messages')

let app = document.getElementById('app')
app.innerHTML = `Hi, ${messages.hi},  ${messages.event}`

if(module.hot){
    module.hot.accept()
}