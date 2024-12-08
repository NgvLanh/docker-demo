const app = require('express')();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    return res.json({ message: 'Docker is easy 🐥' });
});

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
