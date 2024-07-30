import 'dotenv/config';
import experess from 'express';
import cors from 'cors';
import db from './db/dbConnect.js';
import router from './routes/todo_routes.js';

const app = experess();
db();

app.use(experess.json());
app.use(cors());
app.use(router);

app.get('/', (req, res) => {
    res.status(200).send('Hai it is todo server');
})

const PORT = process.env.PORT || 8008;

app.listen(PORT, () => {
    console.log(`todo_sever is running at ${PORT}`);
})
