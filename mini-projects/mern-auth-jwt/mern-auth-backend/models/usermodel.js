import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true, 
    
  }
});


userschema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    return next(error);
  }
});

userschema.methods.comparepass = async function (pass ) {
  return await bcrypt.compare(pass , this.password )
}


const User = mongoose.model('User', userschema);

export {
  User
};
