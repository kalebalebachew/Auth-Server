import express ,{Request, Response} from 'express'

const app = express()
const port = 3000 

app.get('/',(req: Request,res:Response)=>{
    res.send('My auth server lol')

})

app.listen(port, () =>{
    console.log(`Auth server running on ${port}`);
})

