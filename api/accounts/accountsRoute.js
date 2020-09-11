const express = require('express');
const accountsDb = require("../../data/helpers/accountModel");
const { router } = require('../server');

const route = express.Router();

route.get("/", (req, res)=>{
    accountsDb.get()
        .then((accs) =>{
            res.status(200).json(accs)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
});

route.get("/:id", (req, res)=>{
    const id = req.params.id;

    accountsDb.get(id)
        .then((acc) =>{
            res.status(200).json(acc)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

route.post("/", (req, res)=>{
    const body = req.body;

    if(body !== undefined) {
        accountsDb.insert(body)
        .then(acc =>{
            res.status(201).json(acc)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    } else {
        res.status(404).json({"message":"missing body"})
    } 
})

route.put("/:id", (req, res) =>{
    const id = req.params.id;
    const body = req.body;

    accountsDb.update(id, body)
        .then((acc) =>{
            res.status(200).json(acc)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

route.delete("/:id", (req, res)=>{
    const id = req.params.id;

    accountsDb.remove(id)
        .then((acc) =>{
            res.status(204)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

module.exports = route;