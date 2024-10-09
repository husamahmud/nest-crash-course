import { Module } from '@nestjs/common';

import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
