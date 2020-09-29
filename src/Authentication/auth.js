const jwt = require('jsonwebtoken')

AuthToken = (id) => {
    const token = jwt.sign({ _id: id.toString() }, 'rock', { expiresIn: '1d' })
    return token
}
module.exports = AuthToken