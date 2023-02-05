import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { CardsModule } from './modules/cards/cards.module';

@Module({
  imports: [PrismaModule, AccountsModule, CardsModule],
  controllers: [],
})
export class AppModule {}
