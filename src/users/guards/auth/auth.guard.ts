import { Request } from 'express';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('auth guard');

    const request = context.switchToHttp().getRequest() as Request;
    // console.log(request.user.role);
    return false; // error message: Forbidden
  }
}
