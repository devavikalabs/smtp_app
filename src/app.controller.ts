import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ISendMailOptions } from '@nestjs-modules/mailer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/send/mail')
  async sendMail(
    @Body() dto: ISendMailOptions,
  ) {
    return await this.appService.sendMail(dto);
  }
}
