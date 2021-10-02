const app = require("./app");
const port = 3300;

app.listen(port, () => {
  try {
    console.log(`API IS RUNNING ON: https://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
