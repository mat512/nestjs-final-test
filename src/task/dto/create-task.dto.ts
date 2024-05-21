import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    readonly name: string;
    @ApiProperty({
        type: Number,
        description: 'This is a required property',
    })
    readonly userId: string;
    @ApiProperty({
        type: Number,
        description: 'This is a required property',
    })
    readonly priority: string;
}
