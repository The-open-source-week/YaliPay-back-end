import { DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('YaliPay')
  .setDescription('The YaliPay API description')
  .setVersion('0.1')
  .build();

export { config };
