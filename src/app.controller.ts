import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './services/user.service';
import { userDTO } from './DTO/user.dto';
import { RouterKeys } from './model/model';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post(RouterKeys.findUser)
  async findeUser(@Body() id: any) {
    return await this.userService.selectUser(id.id);
  }

  @Post(RouterKeys.insertUser)
  async createUser(@Body() data: userDTO) {
    return await this.userService.insertUser(data);
  }

  @Post(RouterKeys.updateUser)
  async updateUser(@Body() data: userDTO) {
    return await this.userService.updateUser(data);
  }

  @Post(RouterKeys.deleteUser)
  async deleteUser(@Body() id: any) {
    return await this.userService.deleteUser(id.id);
  }
}
