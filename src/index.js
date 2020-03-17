import server from "./config/server";
import config from "./config/config";
import "./config/database";

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
