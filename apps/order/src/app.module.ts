import { Module } from '@nestjs/common';
import { sequelizeConfig } from './configs/sequelize.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderModule } from './order/order.module';
import { Order } from './order/order.model';
import { OrderListGateway } from './order/orderList.gateway';

@Module({
  imports: [
    SequelizeModule.forRoot(sequelizeConfig),
    SequelizeModule.forFeature([Order]),
    OrderModule
  ],
  providers: [OrderListGateway],
})
export class AppModule {}