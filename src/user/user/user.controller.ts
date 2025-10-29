import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('/api/users')
export class UserController {
  @Get('/hello')
  sayHello(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): string {
    return `HELLO ${firstName} ${lastName}`;
  }

  @Get('/:id')
  getById(@Req() request: Request): string {
    return `GET ${request.params.id}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): string {
    return 'Hello nestjs';
  }
}
