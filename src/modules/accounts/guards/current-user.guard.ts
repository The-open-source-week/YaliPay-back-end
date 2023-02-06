import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const Me = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Request['user'] => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.user;
  },
);

// export const Me = createParamDecorator(
//   (data: unknown, ctx: ExecutionContext) => {
//     const request = ctx.switchToHttp().getRequest();
//     return request.user;
//   },
// );
