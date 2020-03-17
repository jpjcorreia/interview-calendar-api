import server from "./src/config/server";
import config from "./src/config/config";
import "./src/config/database";

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
