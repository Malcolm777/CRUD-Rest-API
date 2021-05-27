const { Router } = require('express')
const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

//our first get or create request for the server from the database 
router.get('/', async(req, res) => { 
    try { 
        const aliens = await Alien.find() 
        res.json(aliens)
    }catch(err) {     
        res.send('Error' + err)
    }
})

//creating a get request for one single alien 
router.get('/:id', async(req, res) => { 
    try { 
        const alien = await Alien.findById(req.params.id) 
        res.json(alien)
    }catch(err) {     
        res.send('Error' + err)
    }
})



//all info sending from the client side 
router.post('/', async(req, res) => {
        const alien = new Alien({ 
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub 
    }) 

    try{ 
        const a1 = await alien.save() 
        res.json(a1)  
    }catch(err){ 
        res.send('Error')
    }
})

router.patch('/:id', async(req, res) => { 
    try{ 
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub 
        const a1 = await alien.save() 
        res.json(a1)  
    }catch(err){ 
        res.send('Error')
    }
})

module.exports = router