import express from 'express';
import {getSaldo} from './controllers/saldo.js';
import {getGanhos} from './controllers/ganhos.js';
import {getDespesas} from './controllers/despesas.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/saldo', getSaldo);
app.use('/ganhos', getGanhos);
app.use('/despesas', getDespesas);

app.listen(8800);