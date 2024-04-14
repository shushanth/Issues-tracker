export interface UsersDTO {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export type UserLoginDTO = Omit<UsersDTO, 'firstName' | 'lastName'>;
