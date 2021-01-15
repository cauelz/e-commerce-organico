const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Deborah',
    email: 'deborah@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jesus',
    email: 'jesus@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Marcelo',
    email: 'marcelo@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Patrick',
    email: 'patrick@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

module.export = users;