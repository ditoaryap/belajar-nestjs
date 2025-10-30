import {
  Controller,
  Get,
  Header,
  HttpCode,
  // Param,
  Post,
  Query,
  Redirect,
  // Req,
  // Res,
} from '@nestjs/common';
import type { HttpRedirectResponse } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller('/api/users')
export class UserController {
  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: 'test',
    };
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: '/api/users/sample-response',
      statusCode: 301,
    };
  }

  @Get('/hello')
  sayHello(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): string {
    return `HELLO ${firstName} ${lastName}`;
  }

  //test

  // @Get('/:id')
  // getById(@Param('id') id: string): string {
  //   return `GET ${id}`;
  // }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  get(): string {
    return 'Hello nestjs';
  }
}
