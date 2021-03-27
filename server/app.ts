import * as express from 'express';
import database from './db';
import controller from './controller';
import Controller from './controller';
import * as bodyparser from 'body-parser';

class App {
    public app: express.Application;
    private database: database;
    private controller: controller;

    constructor() {
        this.app = express();
        this.middleware();
        this.database = new database();
        this.database.createConnection();
        this.controller = new controller();
        this.routes();
    }

    middleware() {
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended: true}));
    }

    routes() {
        this.app.route('/').get((req, resp) =>
            resp.status(200).json({"result": "Hello World"}));

        this.app.route('/api/contatos').get((req, resp) =>
            this.controller.select(req, resp));

        this.app.route('/api/contatos/:id').get((req, resp) =>
            this.controller.selectOne(req, resp));

        this.app.route('/api/contatos/:id').delete((req, resp) =>
            this.controller.delete(req, resp));
            
        this.app.route('/api/contatos/:id').put((req, resp) =>
            this.controller.update(req, resp));

        this.app.route('/api/contatos/').post((req, resp) =>
            this.controller.insert(req, resp));
    }
}

export default new App();

