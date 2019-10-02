const express = require('express');
const characterRouter = express.Router();
const Character = require('../models/characters');

characterRouter.get('/', (req, res) => {
    Character.find((err, characters) => {
        if(err) {
            res.status(400);
            res.send(err);
        } else {
            res.json(characters);
        }
    })
});

characterRouter.get('/:character_id', (req, res) => {
    Character.findById(req.params.character_id, (err, character) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.json(character);
        }
    });
});

characterRouter.post('/', (req, res) => {
    let character = new Character();

    character.name = req.body.name;
    character.race = req.body.race;
    character.class = req.body.class;
    character.level = req.body.level;
    character.strength = req.body.strength;
    character.dexterity = req.body.dexterity;
    character.constitution = req.body.constitution;
    character.intelligence = req.body.intelligence;
    character.wisdom = req.body.wisdom;
    character.charisma = req.body.charisma;

    character.save((err, document) => {
        if(err) {
            console.log(`Error saving character: \n${err}`);
            res.status(400);
            res.send(err);
        } else {
            res.send(`Saved ${document} to DB`);
        }
    });
});

characterRouter.delete('/:character_id', (req, res) => {
    Character.deleteOne({
      _id: req.params.character_id  
    }, (err) => {
        if(err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(`Deleted character with id: ${req.body.character_id}`);
        }
    });
});

characterRouter.put('/:character_id', (req, res) => {
    Character.findById(req.params.character_id, (err, character) => {
        if(err) {
            res.status(400).send(err);
        } else {
           character.name = req.body.name;
           character.race = req.body.race;
            character.class = req.body.class;
            character.level = req.body.level;
            character.strength = req.body.strength;
            character.dexterity = req.body.dexterity;
            character.constitution = req.body.constitution;
            character.intelligence = req.body.intelligence;
            character.wisdom = req.body.wisdom;
            character.charisma = req.body.charisma;

            character.save((err, beer) => {
                if(err) {
                    res.status(400).send(err);
                } else {
                    res.send(`Character updated!: \n${character}`);
                }
            });
        }
    });
});

characterRouter.use('/', (req, res) => {
    res.send('char router is working');
});

module.exports = characterRouter;