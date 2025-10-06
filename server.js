const express = require("express");
const path = require("path");
const router = require("./router");

const startServer = async () => {
    const BASEDIR = process.env.BASEDIR || path.resolve(".");
    const PORT = process.env.PORT || 8080;
    const app = express();

    app.use(express.static(BASEDIR + "/public"));
    app.set("views", BASEDIR + "/views");
    app.set("view engine", "ejs");

    app.engine("html", require("ejs").renderFile);
    app.use(express.json());

    app.use(
        express.urlencoded({
            extended: true,
        })
    );
    app.use(router);
    app.listen(PORT, () => {
        console.log(`#### ${PORT} 에서 서버가 시작되었습니다`);
    });
};

startServer();