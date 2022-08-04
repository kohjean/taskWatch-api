module.exports = (app) => {
  const tasks = require('../controllers/tasks.controller');
  const router = require('express').Router();

  router.get('/:id', tasks.findOne);
  router.get('/user/:id', tasks.findAll);
  router.post('/', tasks.create);
  router.delete('/:id', tasks.delete);
  app.use('/api/tasks', router);
};
