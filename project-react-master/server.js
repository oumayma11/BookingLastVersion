const express = require("express");
const app = express();
const db = require("./models");

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
const roomRouts = require("./routes/roomRouts");
const bookingRoute = require("./routes/bookingRoute");

app.use("/api", apiRoutes);
app.use("/room", roomRouts);
app.use("/booking", bookingRoute);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening at : http://localhost:${PORT} `);
    });
});