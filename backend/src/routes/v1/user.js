import userService from '../../services/user-service.js';
import {verifyToken} from '../../middleware/auth.js';
import express from 'express';

const userRouter = express.Router();
userRouter.use(verifyToken);

userRouter.post('/', async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
});

userRouter.get('/', async (req, res, next) => {
  try {
    const users = await userService.findUsers();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
});

userRouter.get('/:userId', async (req, res, next) => {
  try {
    const user = await userService.findUser(req.params.userId);
    if (user !== null) {
      return res.status(200).json(user);
    } else {
      return res.sendStatus(404);
    }
  } catch (e) {
    next(e);
  }
});

userRouter.delete('/:userId', async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.userId);
    return res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

userRouter.put('/:userId', async (req, res, next) => {
  try {
    const [, users] = await userService.updateUser(req.params.userId, req.body);
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
});

export default userRouter;
