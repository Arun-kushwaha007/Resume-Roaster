const axios = require('axios');
const fs = require('fs');


async function callParser(filePath, filename) {
const parserUrl = process.env.PARSER_URL || 'http://localhost:8000/parse';
const form = new FormData();
form.append('file', fs.createReadStream(filePath), filename);


const res = await axios.post(parserUrl, form, {
headers: form.getHeaders(),
timeout: 120000,
});
return res.data;
}


module.exports = { callParser };