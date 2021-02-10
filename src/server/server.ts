import express = require('express');
import path = require('path');


export default class Server{

    public app: express.Application;
    public port: string;
    

    constructor(puerto: string){
        
        this.port = puerto;
        this.app = express();
    }

    static init (puerto: string){
      
        return new Server(puerto);
    }

    private publicFolder(){

        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }

    start( callback: Function){        
        console.log(`PORT: ` + this.port);

        this.app.listen(this.port, callback());
        this.publicFolder();       
    }

}