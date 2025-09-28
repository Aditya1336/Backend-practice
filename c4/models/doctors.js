import mongoose from 'mongoose';
import Hospital from './hospital';

const doctorSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required:true
    },
    salary:{
      type:String,
      required:true
    },
    qualifications:{
      type:String,
      required:true
    },
    experience:{
      type:Number,
      default:0,
    },
    worksAtHospital:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:Hospital
      }
    ]
  },
  {timestamps:true}
)

export default mongoose.model('Doctor',doctorSchema);