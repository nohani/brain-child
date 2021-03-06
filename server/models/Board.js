const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('User');

const BoardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: 'List',
    },
  ],
});

BoardSchema.statics.createBoard = async function (name, user) {
  const Board = this;
  const board = new Board({ name: name, user: user });
  await board.save();

  const success = board._id !== '';
  if (success) {
    const u = await User.findById(user);
    u.boards.push(board._id);
    await u.save();
  }
  const message = success ? 'board was created' : `board was not created`;
  return {
    success,
    message,
    board,
  };
};

BoardSchema.statics.updateBoard = async function (id, input) {
  const Board = this;
  try {
    const res = await Board.findOneAndUpdate({ _id: id }, input, {
      new: true,
      rawResult: true,
    });
    const success = res.ok;
    const message = success ? 'board was updated' : `board failed to update`;
    const board = res.value;
    return {
      success,
      message,
      board,
    };
  } catch (error) {
    return {
      success: false,
      message: 'failed to update board. Double check board ID',
    };
  }
};

BoardSchema.statics.deleteBoard = async function (id) {
  const Board = this;
  try {
    const res = await Board.deleteOne({ _id: id });
    const success = res.ok;
    const message = success ? 'board was deleted' : `board failed to delete`;
    return {
      success,
      message,
    };
  } catch (error) {
    return {
      success: false,
      message: 'failed to delete board. Double check board ID',
    };
  }
};
module.exports = mongoose.model('Board', BoardSchema);
