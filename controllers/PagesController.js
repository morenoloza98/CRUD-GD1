// Importa el modelo de productos
let ProductModel = require('../models/Product')

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let products = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { products: products });
    });
}

// Reglas para la respuesta para la petición "/about"
exports.about = (req, res) => {
  res.send('About us');
}

exports.addNew = (req, res) => {
  res.render('pages/addNew');
}

exports.insertProduct = (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
  // const product = ProductModel.factory(req.body.name, req.body.desc, req.body.price);
  // knex('products')
  //   .insert(product, 'id')
  //   .then(ids => {
  //     const id = ids[0];
  //     res.redirect(`/${id}`);
  //   });
}
