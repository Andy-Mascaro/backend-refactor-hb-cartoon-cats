const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/:id', (req, res) => {
    const { id } = req.params;
    const catInfo = cats.find((info) => info.id === id);
    res.json(catInfo);
  })

  .get('/', (req, res) => {
    const catList = cats.map((info) => {
      return {
        id: info.id,
        name: info.name,
      };
    });
    res.json(catList);
  });
