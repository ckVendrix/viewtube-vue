import { Module } from '@nestjs/common';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Subscription,
  SubscriptionSchema
} from './schemas/subscription.schema';
import {
  VideoBasicInfo,
  VideoBasicInfoSchema
} from 'server/core/videos/schemas/video-basic-info.schema';
import {
  ChannelBasicInfo,
  ChannelBasicInfoSchema
} from 'server/core/channels/schemas/channel-basic-info.schema';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: VideoBasicInfo.name,
        schema: VideoBasicInfoSchema,
        collection: 'videos-basicinfo'
      },
      {
        name: ChannelBasicInfo.name,
        schema: ChannelBasicInfoSchema,
        collection: 'channel-basicinfo'
      },
      {
        name: Subscription.name,
        schema: SubscriptionSchema,
        collection: 'subscriptions'
      }
    ]),
    NotificationsModule
  ],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
  exports: [SubscriptionsService]
})
export class SubscriptionsModule {}
