import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

// @Injectable()
// export class CurrentUserGuard implements CanActivate {
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();
//     return !!request.user;
//   }
// }

export const Me = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Request['user'] => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return request.user;
  },
);
