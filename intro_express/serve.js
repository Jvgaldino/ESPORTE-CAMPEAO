var app = express();
var PORT = 8000;
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT}');
});
app.get("/", (req,res,next) => {
    res.json({mensagem: "Servidor OK"});
});
app.use((req,res) => {
    res.status(404);
})