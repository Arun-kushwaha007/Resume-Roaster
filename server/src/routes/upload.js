const express = require('express');
const multer = require('multer');
const path = require('path');
const { callParser } = require('../services/parserService');


const router = express.Router();
const upload = multer({ dest: 'uploads/' });


router.post('/', upload.single('resume'), async (req, res) => {
try {
const file = req.file;
// TODO: save file to S3 if desired
// call parser microservice
const parseResult = await callParser(file.path, file.originalname);
// TODO: persist to MongoDB (Resume record)
return res.json({ status: 'ok', parseResult });
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Upload failed' });
}
});


module.exports = router;