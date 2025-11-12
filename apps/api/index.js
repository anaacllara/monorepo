import express from 'express';
import cors from 'cors'; 
const app = express();
app.use(express.json()); 
app.use(cors());         

const PORT = process.env.PORT || 3000;


let blockedUrls = [
  { id: 1, url: 'exemplo-inicial.com' }
];


app.get('/api/urls', (req, res) => {
  console.log('GET: Enviando lista de URLs...');
  res.json({ urls: blockedUrls });
});


app.post('/api/urls', (req, res) => {
  const { url } = req.body; 

  if (!url) {
    return res.status(400).json({ msg: 'URL é obrigatória' });
  }

  const newEntry = { id: Date.now(), url: url };
  blockedUrls.push(newEntry);
  
  console.log('POST: URL adicionada:', newEntry);
  res.status(201).json(newEntry); 
});

app.listen(PORT, () => {
  console.log(`Servidor API rodando na porta ${PORT}`);
});