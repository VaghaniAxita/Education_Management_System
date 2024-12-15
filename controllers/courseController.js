const Course = require('../models/Course');

const createCourse = async (req, res) => {
    const { title, description, teacher } = req.body;
    try {
        const course = new Course({ title, description, teacher });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.json(course);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.json({ message: 'Course deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('teacher', 'name email');
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createCourse, updateCourse, deleteCourse, getAllCourses };
