const express = require('express')
const users = require('../data/users.data.js')
const userBodyVal = require('../middlewares/users.midw.js')
const router = express.Router()

// ===============================    GET     ==============================
// All Users _______________________________________________________________

    router.get('/', (req, res) => {
        res.json({ users })
    })

// Users per ID _____________________________________________________________

    router.get('/:id', (req,res)=> {
        const user = users.find((user) => user.id === req.params.id)
        if (!user) res.status(404).send(' ======= 404 - No Matching elements =======')
        res.json(user)
    })

// ===============================    POST    ==============================
// *************************************************************************

    router.post('/', userBodyVal, (req,res)=>{
        const newUser = req.body;
        newUser.id = Math.random().toString();
        users.push(newUser);
        res.status(201).json(newUser);
    })

// ===============================    PUT    ===============================
// *************************************************************************

    router.put('/:id', userBodyVal, (req, res) => {
        const modUser = req.body;
        const id= req.params.id;
        const item = users.find(user => user.id === id);
        const old = item;

        if (item){
            users[item] = modUser;
        }

        const comparison= ["MODIFIED USER", users[item], "ORIGINAL USER", old]
        res.status(200).send(comparison);
    });

// ===============================   PATCH   ===============================
// *************************************************************************

    router.patch('/:id', (req,res)=> {
        const modElement = req.body;
        const id= req.params.id;
        const item = users.findIndex(user => user.id === id);
        let elemToModify="";

            if (item >= 0){
                elemToModify = users[item];
                Object.assign (elemToModify, modElement);
            }

        const comparison = ["MODIFIED ELEMENTS", modElement, "COMPLETE MODIFIED TASK", elemToModify ];
        res.status(200).send(comparison);
    })

// ===============================   DELETE  ===============================
// *************************************************************************

    router.delete('/:id', (req,res)=> {
        const id= req.params.id;
        const item = users.findIndex(user => user.id === id);
        if (item >= 0){
            users.splice(item, 1);
        }
        const result = ["DELETED USER =  ID: " + id, "UPDATED USERS ARRAY", users];
        res.status(200).send(result);
    })

module.exports = router;