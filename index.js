const express = require('express');
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const course = require('./Course/Course.json')
const category = require('./Category/category.json')

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/course', (req, res) => {
    res.send(course)
})

app.get('/course-category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCourse = course.filter(n => n.id === id);
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})