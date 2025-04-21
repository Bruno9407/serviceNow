import express from "express";
import ClienteService from "../Service/clienteService";

const router = express();
router.use(express.json());

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/clientes", async (req, res) => {
  const clienteService = new ClienteService();
  const resultado = await clienteService.buscaTodosClientes();
  console.log("Resultado:", resultado);
  
  res.send({status: 200, mensagem: resultado});
});

router.post("/salvar/cliente", (req, res) => {
  const { nome, email, telefone } = req.body;
  const clienteService = new ClienteService();
  const resultado = clienteService.salvaCliente(nome, email, telefone);
  res.send({status: 200, mensagem: resultado});
});


router.listen(3000, () => {
    console.log("Server is running on port 3000");
});