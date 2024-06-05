import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeEmail(email: string, name: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      subject: "Uygulamamıza Hoş Geldiniz!",
      template: "./welcome",
      context: {
        name,
      },
    });
  }

  async sendPredictionResultEmail(
    email: string,
    prediction: any
  ): Promise<void> {
    const formatPercentage = (value: number) => {
      return (value * 100).toFixed(2) + "%";
    };

    await this.mailerService.sendMail({
      to: email,
      subject: "Diş Sağlığı Tahmin Sonuçlarınız",
      template: "./prediction-result",
      context: {
        caries: formatPercentage(prediction.caries),
        gingivitis: formatPercentage(prediction.gingivitis),
        ulcer: formatPercentage(prediction.ulcer),
      },
    });
  }
}
