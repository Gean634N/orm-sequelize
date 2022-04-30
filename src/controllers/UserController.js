const User = require('../models/Users')

module.exports = {
  async index(_req, res) {
    const user = await User.findAll();

    return res.json(user);
  },

  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  }
}