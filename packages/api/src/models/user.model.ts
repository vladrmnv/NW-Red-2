export interface IUser {
  id?: string;
  email: string;
  password: string;
}

export class User {
  public email: string;
  public password: string;
  constructor({ email, password }: IUser) {
    this.email = email;
    this.password = password;
  }
}
