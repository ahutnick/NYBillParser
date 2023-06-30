const { PORT = 5001 } = process.env;

const app = require("./app");

app.listen(PORT, (error) => {
    console.log(`Listening on Port ${PORT}!`);
    if (error) console.error(error);
})

