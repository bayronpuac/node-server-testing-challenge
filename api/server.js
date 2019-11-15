const express = require('express');

const Smurfs = require('../smurfs/smurfsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up', 
environment: process.env.DB_ENV});
});

server.get('/smurfs', (req, res) => {
    Smurfs.getAll()
    .then(smurfs => {
        res.status(200).json(smurfs)
    })
    .catch(error => {
        res.status(500).json(error);
      });
})

server.post('/smurfs', (req, res) => {
    Smurfs.insert(req.body)
    .then(smurfs => {
        res.status(200).json(smurfs)
    })
    .catch(error => {
        res.status(500).json(error);
      });
})

server.delete('/smurfs/:id', (req, res) => {
    Smurfs.remove(req.params.id)
    .then(smurfs => {
        if(smurfs){
            res.status(200).json({ message: "Smurf Deleted"})
        } else {
            res.status(400).json({ message: "Smurf already Deleted"})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error);
      });
})

module.exports = server;