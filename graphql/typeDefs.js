// import path from "path";
// import { loadFilesSync } from "@graphql-tools/load-files";

import { mergeTypeDefs } from "@graphql-tools/merge";
import userType from "./types/user.js";
import gameType from "./types/game.js";

// const __dirname = path.resolve();
// const typesArray = loadFilesSync(path.join(__dirname, './graphql/types'), { extensions: ['js'] });


export default mergeTypeDefs([userType, gameType]);