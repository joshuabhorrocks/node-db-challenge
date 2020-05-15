const db = require("../data/db-config.js");

module.exports = {
    allProjects,
    findProjectById,
    newProject,
    allResources,
    findResourcesById,
    newResource,
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

function newProject(projectData) {
    return db("projects as p")
    .insert(projectData)
    // .join("project_resources as pr", "pr.id", "=", "p.id")
    // .join("project_tasks as pt", "pt.id", "=", "p.id")
}

function allResources(){
    return db("resources");
}

function findResourcesById(id) {
    return db("resources as r")
    .join("project_resources as pr", "pr.resource_id", "=", "r.id")
    .join("projects as p", "pr.project_id", "=", "p.id")
    .select("r.id", "r.name", "r.description")
    .where("p.id", "=", id)
}

function newResource(resource, id) {
    return db("resources as r")
    .join("project_resources as pr", "pr.resource_id", "=", "r.id")
    .join("projects as p", "pr.project_id", "=", "p.id")
    .insert(resource)
    .where("p.id", "=", id)
}

function findTasks(id) {
    return db("tasks as t")
    .join("projects as p", "t.id", "=", "p.id")
    .select("t.id", "t.description", "t.notes", "t.completed", "p.name as project_name", "p.description as project_description,", "p.id as project_id")
    .where("p.id", id);
}

function findTaskById() {
    return db("tasks as t")
    .join("projects as p", "t.id", "=", "p.id")
    .select("t.id", "t.description", "t.notes", "t.completed", "p.name as project_name", "p.description as project_description,", "p.id as project_id")
}

function newTask(task, id) {
    return db("tasks as t")
    .join("project_tasks as tr", "tr.project_id", "=", "t.id")
    .join("projects as p", "p.id", "=", "tr.id")
    .insert(task)
    .where("t.id", "=", id)
}