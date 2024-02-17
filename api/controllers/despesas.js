import {db} from '../db.js';

export const getDespesas = (_, res) => {
    const busca = 'SELECT * FROM despesas';

    db.query(busca, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addDespesas = (req, res) => {
    const busca = 'INSERT INTO despesas(`nomeDespesa`, `valorDespesa`) VALUES(?)'

    const values = [
        req.body.nomeDespesa,
        req.body.valorDespesa,
    ]

    db.query(busca, [values], (err) => {
        if (err) return res.json(err)

        return res.status(200).json('Valor de despesa inserido com sucesso!!!')
    })
}

export const updateDespesa = (req, res) => {
    const busca = 'UPDATE despesas SET `nomeDespesa` = ?, `valorDespesa` = ?   WHERE `iddespesa` = ?'

    const values = [
        req.body.nomeDespesa,
        req.body.valorDespesa,
    ]

    db.query(busca, [...values, req.params.iddespesa], (err) => {
        if (err) return res.json(err)

        return res.status(200).json('Valor de despesa atualizado com sucesso!!!')
    })
}

export const deleteDespesa = (req, res) => {
    const busca = 'DELETE FROM despesas WHERE `iddespesa` = ?'

    db.query(busca, [req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json('Valor de despesa deletado com sucesso!!!')
    })
}