import {Controller, Get, Post} from "@tsed/common";

@Controller("/resource")
export class ResourceController {

    @Get("")
    async getResources(request: Express.Request, response: Express.Response) {
        const resources =
            {
                "resources": [
                    {
                        "name": "Frijol",
                        "amount": 25,
                        "description": "frijo del bueno"
                    },
                    {
                        "name": "Arroz",
                        "amount": 2,
                        "description": "arroz economico"
                    },
                    {
                        "name": "Leche",
                        "amount": 6,
                        "description": "Deslactosada"
                    },
                    {
                        "name": "Maíz",
                        "amount": 34,
                        "description": "Capia"
                    },
                    {
                        "name": "Huevos",
                        "amount": 12,
                        "description": "AAA"
                    }
                ]
            };
        return resources;
    }

    @Post("")
    async createResource(request: Express.Request, response: Express.Response) {

        // Create new resource
        return {};
    }
}


