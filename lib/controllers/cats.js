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
// Built in middleware

// App routes

// Error handling & 404 middleware for when
// a request doesn't match any app routes
