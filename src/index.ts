export { register } from './methods/register';
export { authenticate } from './methods/authenticate';
export { webAuthnAbortService } from './utils/webAuthnAbortService';
export {
  browserSupportsWebAuthn,
  browserSupportsWebAuthnAutofill,
  platformAuthenticatorIsAvailable,
} from './utils/browser-supports';
