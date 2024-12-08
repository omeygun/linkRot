const express = require("express")
const mongoose = require("mongoose")
const app = express()
const RotUrl = require('./models/rotUrl')
const cookieParser = require('cookie-parser')

require('dotenv').config();

const PORT = process.env.PORT || 6969
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@urlrot.5hmp1.mongodb.net/?retryWrites=true&w=majority&appName=urlRot`

mongoose.connect(uri, {

})

app.set('view engine','ejs')
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))



app.get('/', async (req,res) => {
    const rotUrls = await RotUrl.find({ short: { $in: req.cookies.rot } });
    res.render('index', {rotUrls: rotUrls})
})

app.get('/about', async (req,res) => {
    res.render('about')
})

app.post('/rotUrls', async (req,res) => {
    const rotUrl = await RotUrl.create({full: req.body.fullUrl})   

    if(req.cookies.rot)
        res.cookie("rot",req.cookies.rot.concat([rotUrl.short]))
    else
        res.cookie("rot",[rotUrl.short] )

    console.log(req.cookies)
    res.redirect('/')
})

app.get('/:rotUrl', async(req,res) => {
    const rotUrl = await RotUrl.findOne({short: req.params.rotUrl})

    if(rotUrl == null){
        return res.status(404)
    }

    rotUrl.clicks++
    rotUrl.save()

    res.redirect(rotUrl.full)

})

app.listen(PORT);