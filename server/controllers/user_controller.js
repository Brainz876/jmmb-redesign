
const User = require('../models/user_schema');

module.exports = class UserAPI {

  
  static async createData(req, res) {
    const cart = req.body;
    try {
      await Cart.create(cart);
      res.status(200).json(cart)
    } catch (error) {
      res.status(404).json({ message: error.message});
    }
};

static async readData (req, res) {
  User.find()
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
};

static async updateData (req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
  .then((data) => {
    console.log('User updated!');
    res.status(201).json(data);
  })
  .catch((err) => {
    if (err.name === 'ValidationError') {
      console.error('Error Validating!', err);
      res.status(422).json(err);
    } else {
      console.error(err);
      res.status(500).json(err);
    }
  });
};

static async deleteData (req, res) {
  User.findById(req.params.id)
  .then((data) => {
    if (!data) {
      throw new Error('User not available');
    }
    return data.remove();
  })
  .then((data) => {
    console.log('User removed!');
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
};

}
