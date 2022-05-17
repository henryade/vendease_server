import app from "./app";
import sequelize from "./sequelize";

const port = process.env.PORT;

if (!port) {
  console.log("add port value in your env file");
  process.exit(0);
}

(async () => {
  await sequelize.sync({ force: true });

})();
app.listen(port, () => console.info(`Server running on port ${port}`));

export default app;
