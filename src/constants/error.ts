/**
 * Enumeration of possible error codes for WebAuthnError.
 */
export enum WebAuthnErrorCode {
  CEREMONY_ABORTED,
  INVALID_DOMAIN,
  INVALID_RP_ID,
  INVALID_USER_ID_LENGTH,
  MALFORMED_PUBKEYCREDPARAMS,
  AUTHENTICATOR_GENERAL_ERROR,
  AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT,
  AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT,
  AUTHENTICATOR_PREVIOUSLY_REGISTERED,
  AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG,
  PASSTHROUGH_SEE_CAUSE_PROPERTY,
}

export const ErrorNames = {
  AbortError: "AbortError",
  ConstraintError: "ConstraintError",
  InvalidStateError: "InvalidStateError",
  NotAllowedError: "NotAllowedError",
  NotSupportedError: "NotSupportedError",
  SecurityError: "SecurityError",
  TypeError: "TypeError",
  UnknownError: "UnknownError",
} as const;
