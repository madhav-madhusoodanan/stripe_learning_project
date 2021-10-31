const router = require("express").Router();

router.get("/api", async (req, res) => {
    const apikey = req.get("X-API-Key");
    res.send({ data: `ik you are a ghottt... ${apikey}` });
});

module.exports = router;