import { ErrorCodes } from '../../utils/errors/error-codes.js';
import { ErrorBasePublic } from '../../utils/errors/error-base-public.js';

export class InvalidCredentialsError extends ErrorBasePublic {
  constructor(message: string) {
    super(ErrorCodes.THIRD_PARTY_INVALID_CREDENTIALS, message);
  }
}
