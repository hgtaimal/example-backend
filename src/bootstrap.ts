import {$log, ServerLoader} from "@tsed/common";
import {Server} from "./Server";
import * as Path from "path";
async function bootstrap() {
    try {
        $log.debug("Start server...");
        const server = await ServerLoader.bootstrap(Server,
            {
                rootDir: Path.resolve(__dirname),
                mount: {
                    "/api": ["${rootDir}/**/controllers/**\/*.ts",
                        // ResourceController // support manual import
                    ]
                },
                statics: {
                    "/": Path.join(__dirname, "example.web")
                },
                acceptMimes: ["application/json", "multipart/form-data"],
                port: process.env.PORT || 3000,
            });

        await server.listen();
        $log.debug("Server initialized");
    } catch (er) {
        $log.error(er);
    }
}

bootstrap();
