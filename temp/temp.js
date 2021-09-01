const express = require("express");
// const bodyParser = require("body-parser");

const users = [{ id: 0, name: "admin" }];

const server = express();
// server.use(bodyParser.json());
server.use('/userchild', require('./tempchild.js'))
// // server.get("/users", getUsers);
// server.get("/users/:id", ({ params: { id } }, response) => {
//   const user = users[id];
//   response.send({ user });
// });
// server.post("/users", ({ body }, response) => {
//   const { user } = body;
//   user.id = users.length;
//   users.push(user);
//   response.send({ user });
// });

server.listen(9999, () =>
  console.log("API running on http://localhost:9999")
);

