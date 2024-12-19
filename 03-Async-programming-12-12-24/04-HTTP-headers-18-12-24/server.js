const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // CORS Middleware
app.use(express.json()); // JSON Middleware

app.put('/data', (req, res) => {
    console.log(req.body); // Gelen veri konsola yazdırılır
    res.json({ message: 'Veri başarıyla alındı!' });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
