console.log("user component load")
import {UserService} from '../services/userService.js';
import { User } from '../models/user.js';
import { BaseLogger, ElasticLogger } from '../crossCuttingConcerns/logger.js';

let user1 = new User(1,"Fatih","Hazır","Riga")

let logger1 = new BaseLogger()
let logger2 = new ElasticLogger()
let userService = new UserService(logger2)

userService.add(user1)

console.log(userService.list())


