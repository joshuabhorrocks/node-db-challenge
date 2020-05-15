exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "Past Projects", description: "Projects I've completed this week"},
        {name: "PC Part Picker", description: "An online service for storing component information for building computers"},
        {name: "Experienced YouTubers", description: "JayzTwoCents, LinusTechTips, Bitwit..."},
      ]);
    });
};
