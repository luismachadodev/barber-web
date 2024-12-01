
export class AuthTokenError extends Error{
  constructor(){
    super("Errir with authentication token.");
  }
}