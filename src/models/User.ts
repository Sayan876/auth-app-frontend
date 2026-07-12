export default interface User {
  id: string;
  email: string;
  name?: string;
  enable: boolean;
  image?: string;
  updatedAt?: string;
  createAt?: string;
  provider: string;
}