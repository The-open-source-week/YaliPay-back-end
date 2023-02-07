import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { CardsModule } from './modules/cards/cards.module';
import { TransferencesModule } from './modules/transferences/transferences.module';

@Module({
  imports: [PrismaModule, AccountsModule, CardsModule, TransferencesModule],
  controllers: [],
})
export class AppModule {}
