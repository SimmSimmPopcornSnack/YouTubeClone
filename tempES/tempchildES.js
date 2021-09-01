// var express = require("express");
import express from 'express'
const users = [{ id: 0, name: "admin" }];
// router.get("/users", (req, res) => {
//     res.send({ users });
// });

// router.get("/users", getUsers);
// function getUsers(req, res)
// {
//     res.send({ users });
// }

// function getUsers(req, res)
// {
//     var router = express.Router();
//     router.get("/users", getUsers);
//     res.send({ users });

//     return router;
// }
// export default getUsers;

function getRouters()
{
    var router = express.Router();
    router.get("/", getUsersRoute);
    router.get("/users", getUsers);
    return router;
}
function getUsersRoute(req, res) {
    const rootUsers = "root: " + users;
    res.send({ rootUsers });
}
function getUsers(req, res) {
    res.send({ users });
}
export default getRouters();
// module.exports = router;
