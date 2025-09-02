import { Injectable } from '@nestjs/common';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';
@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) { }


  getHello(): string {
    return 'Hello World!';
  }


  async sendMail(dto: ISendMailOptions) {
    try {
      const data: SentMessageInfo = await this.mailerService.sendMail(dto);
      console.log('success notification', data);
      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  }
}
