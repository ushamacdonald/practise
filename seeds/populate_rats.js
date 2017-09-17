
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rats').del()
    .then(function () {
      // Inserts seed entries
      return knex('rats').insert([
        {id: 1, name: 'Percy', colour: 'white', age: 1, interests: 'being got and hiding in tunnels', gender: 'male'},
        {id: 2, name: 'Atlas', colour: 'ginger', age: 1, interests: 'guarding the food bowl', gender: 'male'}
      ]);
    });
};
