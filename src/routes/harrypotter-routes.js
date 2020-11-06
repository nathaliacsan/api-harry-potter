const express = require('express');
const router = express.Router();
const controller = require('../controllers/harrypotter-controller')

router.get('/characters', controller.getCharacter)
router.get('/characters/:id', controller.getCharacterById)
router.post('/characters', controller.addCharacter)
router.put('/characters/:id', controller.updateCharacter)
router.delete('/characters/:id', controller.deleteCharacter)

module.exports = router