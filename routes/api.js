let express = require("express");
let router = express.Router();

router.get("/whoami", (req, res) => {
    let myObj = {
        ipaddress: req.ip,
        language: req.get("Accept-language"),
        software: req.get("User-Agent")
    };
    res.json(myObj);
});

module.exports = router;