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
    .then(project => {
      res.status(201).json(projectData);
    })
    .catch (err => {
      console.log(err)  
      res.status(500).json({ message: 'Failed to create new project' });
    });
});

router.get('/:id/resources', (req, res) => {
    const {id} = req.params;

    DB.findResourceById(id)
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
  
    DB.newResources(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params;

    DB.findTasks()
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
  
    DB.newTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      console.log(err)  
      res.status(500).json({ message: 'Failed to create new task' });
    });
});

module.exports = router;