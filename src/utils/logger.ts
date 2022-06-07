import pino from "pino";
import dayjs from "dayjs";

const log = pino({
  base: {
    pid: false,
    timestamp: () => `,"time:" ${dayjs().format()}`,
  },
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: true,
    },
  },
});

export default log;
