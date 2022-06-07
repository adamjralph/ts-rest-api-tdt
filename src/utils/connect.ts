import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("Connected to Atlas");
  } catch (error) {
    logger.error("Could not connect to Atlas...");
    process.exit(1);
  }
}

export default connect;
