import {db} from '../db.js';

export const getGanhos = (_, res) => {
    const busca = 'SELECT * FROM ganhos';

    db.query(busca, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addGanho = (req, res) => {
    const busca = 'INSERT INTO ganhos(nomeGanho, valorGanho) VALUES(?, ?)'

    const values = [
        req.body.nomeGanho,
        req.body.valorGanho,
    ]

    db.query(busca, [values], (err) => {
        if (err) return res.status(500).json(err)

        if (result.affectedRows === 0) {
            console.error('Nenhuma linha afetada pela consulta SQL');
            return res.status(500).json({ error: 'Erro ao inserir dados no banco de dados' });
        }

        return res.status(200).json('Valor de ganho inserido com sucesso!!!')
    })
}

export const updateGanho = (req, res) => {
    const busca = 'UPDATE ganhos SET `nomeGanho` = ?, `valorGanho` = ?   WHERE `idganho` = ?'

    const values = [
        req.body.nomeGanho,
        req.body.valorGanho,
    ]

    db.query(busca, [...values, req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json('Valor de ganho atualizado com sucesso!!!')
    })
}

export const deleteGanho = (req, res) => {
    const busca = 'DELETE FROM ganhos WHERE `idganho` = ?'

    db.query(busca, [req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json('Valor de ganho deletado com sucesso!!!')
    })
}