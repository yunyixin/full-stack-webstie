import {UserModel} from '../models'
import * as _ from 'lodash'

class User {

  async registerAction(req, res, next) {
    const {username, password} = req.body

    const user = await UserModel.find().or([{username}])
    if (!_.isEmpty(user)) {
      res.send({
        code: 0,
        message: '邮箱或用户名已存在！'
      });
    } else {
      let newUser = new UserModel({
        username,
        password
      });
      await newUser.save();
      res.send({
        state: 1,
        message: "注册成功！"
      });
    }
  }

  async loginAction(req, res, next) {
    const {username, password} = req.body

    console.log('run')
    if (username === '' || password === '') {
      res.send({
        code: 0,
        message: '用户名和密码不能为空！'
      });
      return;
    }

    let user = await UserModel.findOne({
      username,
      password
    })

    if (user) {
      res.send({
        code: 1,
        message: 'success'
      })
    } else {
      res.send({
        code: 0,
        message: "用户名或密码错误"
      });
    }
  }

  async getUsersAction(req, res, next) {
    const list = await UserModel.find()

    res.send({
      code: 1,
      content: {
        data: list
      }
    })
  }
}

module.exports = new User()

