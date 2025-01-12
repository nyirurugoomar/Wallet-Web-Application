import { Controller,Get,Post,Body } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './schemas/account.schema';
import { ApiNotFoundResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
@Controller('account')
export class AccountController {
    constructor(private accountService:AccountService){}

    @Get()
    @ApiOperation({summary:'Get list of accounts'})
    @ApiResponse({
        status: 200,
        description: 'List of accounts successfully',
      })
      @ApiNotFoundResponse({description:'Fail to fetch list of accounts'})
    async getAllAccount():Promise<Account[]>{
        return await this.accountService.getAllAccounts()
    }


    @Post()
    @ApiOperation({summary:'Account create'})
    @ApiResponse({
        status: 201,
        description: 'Account create successfully',
        type:CreateAccountDto,
        isArray:true
      })
      @ApiNotFoundResponse({description:'Fail to create account'})
    async createAccount(
        @Body()
        createAccount:CreateAccountDto
    ):Promise<{message:string,account:Account}>{
        return await this.accountService.createAccount(createAccount)
    }
}
