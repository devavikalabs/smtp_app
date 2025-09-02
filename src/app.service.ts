import { Injectable } from '@nestjs/common';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) { }


  getHello(): string {
    return 'Hello World!';
  }


  async sendMail(dto: ISendMailOptions) {
    return this.mailerService.sendMail(dto);
  }
}
