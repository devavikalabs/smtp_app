import { Injectable } from '@nestjs/common';
import { ISendMailOptions, MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) { }


  getHello(): string {
    return 'Hello World!';
  }


  async sendMail(dto: ISendMailOptions) {
    try {
      const data = await this.mailerService.sendMail(dto);
      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  }
}
