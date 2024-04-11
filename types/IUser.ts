export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: number;
  password: string;
  phone: string | null;
  preview: string | null;
  role: string;
  access_token: string | null;
  auth_key: string;
  created_at: number;
  updated_at: number;
}
