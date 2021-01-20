const casual = require('casual')

// 'password' hashed with bcrypt scheme
// const password = '$2a$10$rQEY9CNl4OC.UtiyRgKnZeW0KaWnEANMKAxfIpNDQCgiCybm3G1fy'

casual.define('users', () => ({
  id: casual.uuid,
  email: casual.email,
  password: casual.password,
  firstName: casual.first_name,
  lastName: casual.last_name,
  birthdate: casual.date(),
  phoneNumber: casual.phone,
  age: casual.integer(1, 100),
}))

const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.users)
}

// console.log(userData)
module.exports = userData
