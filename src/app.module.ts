import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AccountsModule } from './modules/accounts/accounts.module';

@Module({
  imports: [PrismaModule, AccountsModule],
  controllers: [], 
 
})
export class AppModule {}
