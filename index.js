import e from "express";
import cors from 'cors';

const app = e()
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(e.json());


let vscodeStatus = 0;

app.post('/vscode-status', (req, res) => {
    vscodeStatus = req.body.status;
    console.log(`Status do vscode atualizado: ${vscodeStatus ? 'Aberto' : 'Fechado'}`);
    res.sendStatus(200)
});

app.get('/', (req, res) => {
    res.json({status: vscodeStatus})
})

app.listen(PORT, () => {
    console.log(`Servidor no railway rodando na porta ${PORT}`)
})
