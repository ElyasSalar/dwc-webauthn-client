export { WebAuthnError } from './utils/error';
export { register } from './methods/register';
export { authenticate } from './methods/authenticate';
export { WebAuthnErrorCode } from './constants/error';
export { webAuthnAbortService } from './utils/webAuthnAbortService';
export {
  browserSupportsWebAuthn,
  browserSupportsWebAuthnAutofill,
  platformAuthenticatorIsAvailable,
} from './utils/browser-supports';
export {
  bufferToBase64URLString,
  base64URLStringToBuffer,
} from './utils/communications';

