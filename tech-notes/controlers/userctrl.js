import { User } from "../models/usermodel.js";
import { Note } from '../models/notesmodel.js';
import bcrypt from 'bcryptjs';

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').lean();
    if (!users?.length) {
      return res.status(400).json({ message: 'No users found' });
    }
    res.json(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = async (req, res) => {
  try {
    const { username, password, roles } = req.body;

    if(!(roles)) {
        return res.send("pass not found ")
    }

    if (!username || !password || !Array.isArray(roles) || !roles.length) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const duplicate = await User.findOne({ username }).lean().exec();
    if (duplicate) {
      return res.status(409).json({ message: 'Duplicate username' });
    }
    const hashedPwd = await bcrypt.hash(password, 10);
    const userObject = { username, password: hashedPwd, roles };
    const user = await User.create(userObject);
    if (user) {
      res.status(201).json({ message: `New user ${username} created` });
    } else {
      res.status(400).json({ message: 'Invalid user data received' });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = async (req, res) => {
  try {
    const { id, username, roles, active, password } = req.body;
    if (!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
      return res.status(400).json({ message: 'All fields except password are required' });
    }
    const user = await User.findById(id).exec();
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    const duplicate = await User.findOne({ username }).lean().exec();
    if (duplicate && duplicate._id.toString() !== id) {
      return res.status(409).json({ message: 'Duplicate username' });
    }
    user.username = username;
    user.roles = roles;
    user.active = active;
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }
    const updatedUser = await user.save();
    res.json({ message: `${updatedUser.username} updated` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ message: 'User ID Required' });
    }
    const note = await Note.findOne({ user: id }).lean().exec();
    if (note) {
      return res.status(400).json({ message: 'User has assigned notes' });
    }
    const user = await User.findById(id).exec();
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    const result = await user.deleteOne();
    const reply = `Username ${result.username} with ID ${result._id} deleted`;
    res.json(reply);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
