import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotifBody {
    @IsNotEmpty()
    @IsUUID()
    recipientId: string;

    @IsNotEmpty()
    @Length(5, 200)
    content: string;

    @IsNotEmpty()
    category: string;
}
