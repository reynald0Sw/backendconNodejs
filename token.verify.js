const jwt = require('jsonwebtoken');

const secret = 'mycat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4NzU1MTMyNH0.DHoSKxyYn4bzHO64NfqYF0OiKQLxObGak7CcfLA0Wzs';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);

};

const payload = verifyToken(token, secret);
console.log(payload);
