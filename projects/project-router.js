const express = require('express');

const DB = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    DB.allProjects()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get projects' });
    });
});

router.post('/', (req, res) => {
    const projectData = req.body;
  
    DB.newProject(projectData)
    .then(newProject => {
      res.status(201).json(newProject);
    })
    .catch (err => {
      console.log(err)  
      res.status(500).json({ message: 'Failed to create new project' });
    });
});

router.get('/:id/resources', (req, res) => {
    const {id} = req.params;

    DB.findResourcesById(id)
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get resources' });
    });
});

router.post('/:id/resources', (req, res) => {
    const {id} = req.params;
    const resourceData = req.body;
  
    DB.newResource(resourceData, id)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params;

    DB.findTaskById(id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get tasks' });
    });
});

router.post('/:id/tasks', (req, res) => {
    const {id} = req.params;
    const taskData = req.body;
  
    DB.newTask(taskData, id)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      console.log(err)  
      res.status(500).json({ message: 'Failed to create new task' });
    });
});

module.exports = router;