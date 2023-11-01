import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum UserCateogry {
  ADMIN = 'Administrator',
  SELLER = 'Vendedor',
  USER = 'Usuário',
}
@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;

  @Prop()
  hash: string;

  @Prop()
  category: UserCateogry;
}

export const UserSchema = SchemaFactory.createForClass(User);
