var express = require("express");
var router = express.Router();
const users = [{ id: 0, name: "admin" }];
router.get("/users", (req, res) => {
    res.send({ users });
});
// router.get("/users", getUsers);
// function getUsers(req, res)
// {
//     res.send({ users });
// }

// export default router;
module.exports = router;
