exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Create Seed Data", description: "Create Seed Data for Sprint Challenge", completed: 1},
        {name: "Research Computer Building", description: "Learn from online resources how to build a computer", completed: 1}
      ]);
    });
};