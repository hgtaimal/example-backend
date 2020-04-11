
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


import express from 'express';
import path from "path";

class Exchange {
    private app;

    public async configureServer() {
        this.app = express();
        this.app.get('/api/resources', function (req, res) {

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
            res.send(resources);
        });

        this.app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
        });
    }

    public configureStaticServer() {
        this.app.use(express.static(__dirname + '/web-content'));
        this.app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname + '/web-content/index.html'));
        });
    }
}

const myApp = new Exchange();
myApp.configureServer();
myApp.configureStaticServer();
