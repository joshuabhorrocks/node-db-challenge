const db = require("../data/db-config.js");

module.exports = {
    allProjects,
    findProjectById,
    newProject,
    findResources,
    findResourceById,
    newResources,
    findTasks,
    findTaskById,
    newTask
};

function allProjects() {
    return db("projects");
}

function findProjectById(id) {
    return db("projects").where("id", id).first();
}

function newProject(project) {
    return db("projects")
    .insert(project, "id")
    .then(ids => {
        db("projects").where({id: ids[0]})
    })
}

function findResources() {
    return db("resources");
}

function findResourceById(id) {
    return db("resources as r")
    .join("project_resources as pr", "pr.project_id", "=", "r.id")
    .join("projects as p", "p.id", "=", "pr.id")
    .where("r.id", "=", id)
}

function newResources(resource, id) {
    return db("resources as r")
    .join("project_resources as pr", "pr.project_id", "=", "r.id")
    .join("projects as p", "p.id", "=", "pr.id")
    .insert(resource, id)
    .then(ids => {
        return findProjectById(ids[0]);
    })
    .where("r.id", "=", id)
}

function findTasks(id) {
    return db("tasks as t")
    .join("project_tasks as pt", "pt.project_id", "=", "t.id")
    .join("projects as p", "p.id", "=", "pt.id")
    .select("p.name", "p.description", "t.id", "t.description", "t.notes", "t.completed")
    .where("t.id", "=", id)
}

function findTaskById(id) {
    return db("tasks").where("id", id).first();
}

function newTask(task) {
    return db("tasks")
      .insert(task, "id")
      .then(ids => {
        return findTaskById(ids[0]);
    });
}