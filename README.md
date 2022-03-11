# simple-jwt-nodejs
Simple JWT Node JS, versi sederhana implementasi JWT pada nodejs dengan menggunakan library jsonwebtoken

# Tools Project
- nodejs versi berapa aja
- visual studio code
- postman

# Running Project
node index.js

# Test Project
Buka postman
- http://localhost:9000/user/generateToken (methode POST)
- http://localhost:9000/user/validateToken (methode GET)
  isi header dengan
  - property: baituna_studio_token_header_key (sesuai nilai TOKEN_HEADER_KEY di .env)
  - value: token (yang didapat dari generateToken)
- http://localhost:9000/user/verifyAuthToken (methode GET)
  isi tab authorization dengan type **Barier Token** 
