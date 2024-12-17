const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Terhubung ke MongoDB'))
.catch(err => console.error('Gagal terhubung ke MongoDB:', err));

// Route sederhana
app.get('/', (req, res) => {
  res.json({ message: 'Hello Docker!' });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});