import mongoose from 'mongoose';

const recordSchema = mongoose.Schema(
  {},
  {timestamps:true}
)

export default mongoose.model('MedRecord',recordSchema);