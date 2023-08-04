const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2")

const imageSchema = new Schema({
  title: { type: String},
  description: {type: String},
  filename: { type: String},
  path: { type: String},
  originalname: { type: String},
  mimetype: { type: String},
  size: { type: Number},
  create_at: { type: Date, default: Date.now() }
})

imageSchema.plugin(mongoosePaginate);

module.exports =  model("Image", imageSchema);