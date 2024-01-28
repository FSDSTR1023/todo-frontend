const userBodyVal = (req, res, next) => {
    if (
        req.body.username === undefined ||
        req.body.username === null ||
        req.body.username === "" ||
        req.body.email === undefined ||
        req.body.email === null ||
        req.body.email === ""
    ){
        res.status(404).send(' ======= 404 - INVALID REQUEST / MISSING IMPORTANT INFO =======');
        return;
    }
        next();
    };

module.exports = userBodyVal;