const casual = require('casual')

// 'password' hashed with bcrypt scheme
// const password = '$2a$10$rQEY9CNl4OC.UtiyRgKnZeW0KaWnEANMKAxfIpNDQCgiCybm3G1fy'

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  password: casual.password,
  username: casual.name,
  firstName: casual.first_name,
  lastName: casual.last_name,
  birthdate: casual.date(),
  phoneNumber: casual.phone,
  age: casual.integer(1, 100),
  bio: casual.sentence,
  followers: casual.integer(1, 100),
  imageurl: casual.url,
  profileurl: casual.url,
}))

const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

// console.log(userData)
module.exports = userData
