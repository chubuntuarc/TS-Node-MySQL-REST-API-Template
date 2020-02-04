//Dependecies.
import express, { Application } from 'express';
// HTTP request logger middleware for node.js https://github.com/expressjs/morgan#readme
import morgan from 'morgan'; 
// Routes
import IndexRoutes from './routes/index.routes';
import SampleRoutes from './routes/sample.routes';

export class App{

    private app: Application;

    // App constructor class.
    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        // Set the port server based on property, .env, or default.
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares(){
        this.app.use(morgan('dev')); // Display dev logs.
        this.app.use(express.json())
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/sample', SampleRoutes); // Routing for ./sample
    }

    async listen(){
        // Function to listen a port from settings and run the app.
        await this.app.listen(this.app.get('port'));
        console.log(`Server on port ${this.app.get('port')}`);
    }

}
