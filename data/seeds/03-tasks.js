exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: "Set aside time to research computer components", notes: "Research now will save you money in the long run", completed: 1},
        {description: "Pick CPU/Motherboard type", notes: "AMD = value, top Intel = performance", completed: 1},
        {description: "Pick Graphics Card", notes: "RTX capabilities", completed: 1},
        {description: "Pick Case", notes: "RGB is a +", completed: 1},
        {description: "Pick RAM", notes: "DDR4 3600 is best for AMD", completed: 0},
        {description: "Pick Power Supply", notes: "Old power supply work?", completed: 0},
      ]);
    });
};
