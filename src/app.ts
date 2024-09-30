import express ,{Request, Response} from 'express'
import path from 'path';

const app = express()
const port = 3000 

app.use(express.static(path.join(__dirname, '../public'))); 
app.get('/',(req: Request,res:Response)=>{
    res.send('My auth server lol')

})

app.listen(port, () =>{
    console.log(`Auth server running on ${port}`);
})

