import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080
const STRCNX = process.env.STRCNX || 'mongodb://localhost'
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM'   // MEM - MONGO
const BASE = process.env.BASE || 'test'
const BASE_ROUTER = process.env.BASE_ROUTER || '/api/v1'
const CONFIG_MAILER = process.env.MAILER_CONFIG;

export default {
    PORT,
    STRCNX,
    MODO_PERSISTENCIA,
    BASE,
    BASE_ROUTER,
    CONFIG_MAILER
}