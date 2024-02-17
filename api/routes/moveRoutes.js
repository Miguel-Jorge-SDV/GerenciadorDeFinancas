import express from 'express';
import { getSaldo, updateSaldo } from '../controllers/saldo.js'
import { addGanho, deleteGanho, updateGanho } from '../controllers/ganhos.js';
import { addDespesas, deleteDespesa, updateDespesa } from '../controllers/despesas.js';
const router = express.Router();

router.get('/ganhos', getGanhos);
router.get('/despesas', getDespesas);
router.get('/saldo', getSaldo);

router.post('/ganhos', addGanho);
router.post('/despesas', addDespesas)

router.put('/ganhos/:id', updateGanho)
router.put('/despesas/:id', updateDespesa)
router.put('/saldo/:id', updateSaldo)

router.delete('/ganhos/:id', deleteGanho)
router.delete('/despesas/:id', deleteDespesa)

export default router;