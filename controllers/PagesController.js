let ProductModel = require('../models/Product')

const knex = require('../database/connection');

exports.homepage = (req, res) => {
  ProductModel.all()
    .then((data) => {
      let products = data;
      res.render('pages/homepage', { products: products });
    });
}

exports.addNew = (req, res) => {
  res.render('pages/addNew');
}

exports.insertProduct = (req, res) => {
  const product = {
    name : req.body.name,
    description : req.body.desc,
    price : req.body.price
  };
  knex('products')
    .insert(product, 'id')
    .then(ids => {
      const id = ids[0];
      res.redirect(`/${id}`);
    });
}

function respondAndRenderView(id, res, view){
  if(typeof id != 'undefined'){
    knex('products')
    .select()
    .where('id', id)
    .first()
    .then(product => {
      res.render(view, product);
    });
  }else{
    console.log('error');
  }
}

exports.specificProduct = (req, res) => {
  const id = req.params.id;
  respondAndRenderView(id, res, 'pages/single')
}

exports.editProduct = (req, res) => {
  const id = req.params.id;
  respondAndRenderView(id, res, 'pages/edit')
}

exports.updateProduct = (req, res) => {
  const product = {
    name : req.body.name,
    description : req.body.desc,
    price : req.body.price
  };
  knex('products')
    .where('id', req.params.id)
    .update(product, 'id')
    .then(() => {
      res.redirect(`/${req.params.id}`);
    });
}

exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  if(typeof id != 'undefined'){
    knex('products')
    .where('id', id)
    .del()
    .then(() => {
      res.redirect('/');
    });
  }else{
    console.log('error');
  }
}
