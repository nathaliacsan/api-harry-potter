const model = require('../models/harrypotterSchema')
const { request, response } = require('express')

const getCharacter = (request, response) => {
    console.log(request.url)
    model.harryPotterCollection.find((error, character) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send(character)
        }
    })
}

const getCharacterById = (request, response) => {
    const idParam = request.params.id
    model.harryPotterCollection.findById(idParam, (error, character) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            if (character) {
                return response.status(200).send(character)
            } else {
                return response.status(404).send("Esse personagem não foi encontrado :( ")
            }
        }
    })
}

const addCharacter = (request, response) => {

    const characterBody = request.body
    const newCharacter = new model.harryPotterCollection(characterBody)

    newCharacter.save((error) => {
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(201).send(newCharacter)
        }
    })
}

const updateCharacter = (request, response) => {

    const idParam = request.params.id
    const characterBody = request.body 
    const newCharacter = {new: true}

    model.harryPotterCollection.findByIdAndUpdate(

        idParam,
        characterBody,
        newCharacter,
        (error, character) => {
            if(error) {
                return response.status(500).send(error)
            } else if (character) {
                return response.status(200).send(character)
            } else {
                return response.sendStatus(404)
            }
        }
    )
}

const deleteCharacter = (request, response) => {

    const idParam = request.params.id
    model.harryPotterCollection.findByIdAndDelete(idParam,(error, character) => {

        if (error) {
            return response.status(500).send(error)
        } else {
            if (character) {
                return response.status(200).send("Personagem deletado")
            } else {
                return response.sendStatus(404)
            }
        }
    })
}

module.exports = {
    getCharacter,
    getCharacterById,
    addCharacter,
    updateCharacter,
    deleteCharacter
}