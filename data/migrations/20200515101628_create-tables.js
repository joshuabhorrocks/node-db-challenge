exports.up = function(knex) {
    return knex.schema.createTable("projects", projects => {
        projects.increments();
  
        projects.string("name", 255).notNullable();
        projects.string("description", 1000);
        projects.integer("completed").default(0);
    })
  .createTable("resources", resources => {
      resources.increments();
      
      resources.string("name", 255).notNullable();
      resources.string("description", 1000);
  })
  .createTable("tasks", tasks => {
      tasks.increments();
  
      tasks.string("description", 1000).notNullable()
      tasks.string("notes", 1000).notNullable();
      tasks.integer("completed").default(0);
  })
  .createTable("project_resources", project_resources => {
      project_resources.increments();
  
      project_resources.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
  
      project_resources.integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources")
      .onUpdate("CASCADE")
      })
  .createTable("project_tasks", project_tasks => {
      project_tasks.increments();
  
      project_tasks.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
  
      project_tasks.integer("task_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("tasks")
      .onUpdate("CASCADE")
      })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("project_tasks")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
  };