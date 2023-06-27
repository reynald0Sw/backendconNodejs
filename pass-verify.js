const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$z4pPmoLCFGC9dVD9LVYoduOFcvyuVlJQFgH1E/2FjL9irRCz2Z2oS';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
