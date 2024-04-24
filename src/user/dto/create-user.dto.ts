import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    readonly email: string;
}
