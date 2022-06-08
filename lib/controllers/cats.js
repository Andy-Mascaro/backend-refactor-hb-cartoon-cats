const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const catInfo = await Cat.getById(id);
    res.json(catInfo);
  })

  .get('/', async (req, res) => {
    const catList = await Cat.getAll();
    res.json(catList);
  });
