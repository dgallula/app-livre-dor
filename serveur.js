let app = require('express')()

app.get('/',(request,response)=> {

    response.send('start')
})

app.listen(8080)