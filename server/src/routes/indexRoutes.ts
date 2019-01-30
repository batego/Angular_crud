import { Router } from 'express';

class IndexRouter {

    public router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', (req,res) =>{
            res.send('hello');
        });
    }
}

const indexRoutes = new IndexRouter();
export default indexRoutes.router; 