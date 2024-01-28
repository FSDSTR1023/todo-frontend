const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const status = {
  PENDING: 'Pendiente',
  IN_PROGRESS: 'En proceso',
  COMPLETED: 'Completado'
};

const taskSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  status: {type: String, enum: [status.PENDING, status.IN_PROGRESS, status.COMPLETED]},
  datestart: String,
  dateend: String,
  user: String,
},{
  timestamps:true
});

module.exports = mongoose.model("Task", taskSchema);