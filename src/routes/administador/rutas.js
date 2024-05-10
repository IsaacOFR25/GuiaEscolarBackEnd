const { Router } = require("express");
const axios = require("axios");
const router = Router();

// Ruta para obtener todas las rutas desde la API externa
router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://backend-apimaqueta-334c971f153e.herokuapp.com/rutas");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las rutas" });
  }
});

// Ruta para agregar una nueva ruta a la API externa
router.post("/agregar", async (req, res) => {
  try {
    const nuevaRuta = req.body;
    const response = await axios.post("https://backend-apimaqueta-334c971f153e.herokuapp.com/rutas", nuevaRuta);
    res.status(200).send("Ruta agregada");
  } catch (error) {
    res.status(500).json({ error: "Error al agregar la ruta" });
  }
});

// Ruta para eliminar una ruta específica de la API externa
router.delete("/eliminar/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.delete(`https://backend-apimaqueta-334c971f153e.herokuapp.com/rutas/${id}`);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la ruta" });
  }
});

// Ruta para obtener una ruta específica desde la API externa
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(`https://backend-apimaqueta-334c971f153e.herokuapp.com/rutas/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: "Ruta no encontrada" });
  }
});

module.exports = router;
