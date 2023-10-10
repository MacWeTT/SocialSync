export interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  verified: boolean;
}

export interface JWT {
  token_type: string;
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
  username: string;
  name: string;
  email: string;
  verified: boolean;
}
