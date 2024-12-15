const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const gradeRoutes = require('./routes/gradeRoutes');

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req,res) => {
    res.send('Welcome to Education api!');
});
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/enrollment', enrollmentRoutes);
app.use('/api/grades', gradeRoutes);

app.listen(7000, () => console.log('Server running on port 7000'));
