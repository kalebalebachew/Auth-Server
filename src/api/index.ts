const { VercelRequest, VercelResponse } = require('@vercel/node');
import app from '../app'

export default (req: typeof VercelRequest, res: typeof VercelResponse) =>{

    return app(req, res)
}