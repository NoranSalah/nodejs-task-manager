const express = require('express'), bodyParser = require('body-parser'),
      path = require('path'),
      ejs = require('ejs'),
      expressLayouts = require('express-ejs-layouts')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const Task = require('./models/task')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(path.join(__dirname, 'views')))
app.use('/', require('./routes'))


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {

    const user = await User.findById('5c2e4dcb5eac678a23725b5b')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()
