import {db} from '../db.js';

export const getSaldo = (_, res) => {
    const busca = 'SELECT * FROM saldo';

    db.query(busca, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const updateSaldo = (req, res) => {
    const busca = 'UPDATE saldo SET `valorSaldo` = ?   WHERE `idganho` = 1'

    const values = [
        req.body.valorSaldo,
    ]

    db.query(busca, values, (err) => {
        if (err) return res.json(err);

        return res.status(200).json('Valor de saldo atualizado com sucesso!!!');
    });
}
