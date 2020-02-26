const knex = require('../database/connection');

exports.factory = (name, description, price) => {
  return {
    name: name,
    description: description,
    price: price
  }
}

exports.all = () => {
  return knex
    .from('products')
    .select('*');
}
