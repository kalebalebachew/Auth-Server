import express from 'express'
import  {registerUser}  from "../controllers/register";
// import login from "../controllers/login"


const router = express.Router()

router.post('/register', registerUser)




export default router