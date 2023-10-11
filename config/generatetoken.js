const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../middlewares/env');

function generateToken(user) {
  const payload = {
    id: 123,
    email: user.email,
  };

  const options = {
    expiresIn: '1m',
  };

  return jwt.sign(payload, jwtSecret, options);
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded;
  } catch (error) {
    return null;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
