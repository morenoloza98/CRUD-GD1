exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { name: 'Mouse', description: 'It clicks!', price: 200 },
        { name: 'Keyboard', description: 'It has a lot of keys', price: 500 },
        { name: 'Headphones', description: 'There is sound coming out', price: 700 },
      ]);
    });
};
