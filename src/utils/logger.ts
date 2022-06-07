import pino from "pino";
// import pretty from "pino-pretty";
import dayjs from "dayjs";

const log = pino({
  base: {
    pid: false,
    timestamp: () => `,"time:" ${dayjs().format("YYYY-MM-DD HH:mm:ms:ssZ[Z]")}`,
  },
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: true,
    },
  },
  // timestamp: () => `,"time:"${dayjs().format()}`,
});

//   timestamp: () => `,"time:"${dayjs().format()}`,
// const log = logger({

// const log = logger({
//   transport: {
//     target: "pino-pretty",
//     options: {
//       colorize: true,
//     },
//   },
//   base: {
//     pid: false,
//   },
// });

export default log;
