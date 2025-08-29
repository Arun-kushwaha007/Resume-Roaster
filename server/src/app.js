const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uploadRouter = require('./routes/upload');


require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/upload', uploadRouter);


const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
console.log(`Server running on port ${PORT}`);
if (process.env.MONGO_URI) {
await mongoose.connect(process.env.MONGO_URI);
console.log('Connected to MongoDB');
}
});