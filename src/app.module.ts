import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // use TLS
        auth: {
          user: "dev.avikalabs@gmail.com",
          pass: "dwww rqpt lafe ylds"
        }
      },
      defaults: {
        from: "LMS Product <dev.avikalabs@gmail.com>",
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
