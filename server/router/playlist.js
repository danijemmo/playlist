const express = require("express")
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('all playlist')
})

router.get('/:id',(req,res)=>{
    res.send('song by id')
})

router.post('/',(req,res)=>{
    res.send('post song')
})

router.put('/:id',(req,res)=>{
    res.send('update song')
})

router.delete('/:id',(req,res)=>{
    res.send('delete song')
})

module.exports = router;