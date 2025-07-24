import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: "Creación de servidor listo"});
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})