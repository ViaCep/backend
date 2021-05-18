import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(routes)

app.listen(3333, () => {
    console.clear();
    console.log('Aplication running in http://localhost:3333')
})