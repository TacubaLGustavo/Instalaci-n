const { resolveSoa } = require("dns");
const express = require("express");
const app = express ();
const os = require('os');

let cpu = os.cpus();
console.log(cpu);

app.get('/', (req,res) =>
{
    res.send("hola mundo");
});
app.get('/mio', (req,res) =>
{
    res.send("mio");
});
app.listen(3000, () =>
{
    console.log("servidor en el puerto 3000");
});