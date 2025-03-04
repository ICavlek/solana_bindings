/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  isProgramError,
  type Address,
  type SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM,
  type SolanaError,
} from '@solana/web3.js';
import { MY_PROGRAM_PROGRAM_ADDRESS } from '../programs';

/** DeserializationError: Error deserializing an account */
export const MY_PROGRAM_ERROR__DESERIALIZATION_ERROR = 0x0; // 0
/** SerializationError: Error serializing an account */
export const MY_PROGRAM_ERROR__SERIALIZATION_ERROR = 0x1; // 1
/** InvalidProgramOwner: Invalid program owner. This likely mean the provided account does not exist */
export const MY_PROGRAM_ERROR__INVALID_PROGRAM_OWNER = 0x2; // 2
/** InvalidPda: Invalid PDA derivation */
export const MY_PROGRAM_ERROR__INVALID_PDA = 0x3; // 3
/** ExpectedEmptyAccount: Expected empty account */
export const MY_PROGRAM_ERROR__EXPECTED_EMPTY_ACCOUNT = 0x4; // 4
/** ExpectedNonEmptyAccount: Expected non empty account */
export const MY_PROGRAM_ERROR__EXPECTED_NON_EMPTY_ACCOUNT = 0x5; // 5
/** ExpectedSignerAccount: Expected signer account */
export const MY_PROGRAM_ERROR__EXPECTED_SIGNER_ACCOUNT = 0x6; // 6
/** ExpectedWritableAccount: Expected writable account */
export const MY_PROGRAM_ERROR__EXPECTED_WRITABLE_ACCOUNT = 0x7; // 7
/** AccountMismatch: Account mismatch */
export const MY_PROGRAM_ERROR__ACCOUNT_MISMATCH = 0x8; // 8
/** InvalidAccountKey: Invalid account key */
export const MY_PROGRAM_ERROR__INVALID_ACCOUNT_KEY = 0x9; // 9
/** NumericalOverflow: Numerical overflow */
export const MY_PROGRAM_ERROR__NUMERICAL_OVERFLOW = 0xa; // 10

export type MyProgramError =
  | typeof MY_PROGRAM_ERROR__ACCOUNT_MISMATCH
  | typeof MY_PROGRAM_ERROR__DESERIALIZATION_ERROR
  | typeof MY_PROGRAM_ERROR__EXPECTED_EMPTY_ACCOUNT
  | typeof MY_PROGRAM_ERROR__EXPECTED_NON_EMPTY_ACCOUNT
  | typeof MY_PROGRAM_ERROR__EXPECTED_SIGNER_ACCOUNT
  | typeof MY_PROGRAM_ERROR__EXPECTED_WRITABLE_ACCOUNT
  | typeof MY_PROGRAM_ERROR__INVALID_ACCOUNT_KEY
  | typeof MY_PROGRAM_ERROR__INVALID_PDA
  | typeof MY_PROGRAM_ERROR__INVALID_PROGRAM_OWNER
  | typeof MY_PROGRAM_ERROR__NUMERICAL_OVERFLOW
  | typeof MY_PROGRAM_ERROR__SERIALIZATION_ERROR;

let myProgramErrorMessages: Record<MyProgramError, string> | undefined;
if (process.env.NODE_ENV !== 'production') {
  myProgramErrorMessages = {
    [MY_PROGRAM_ERROR__ACCOUNT_MISMATCH]: `Account mismatch`,
    [MY_PROGRAM_ERROR__DESERIALIZATION_ERROR]: `Error deserializing an account`,
    [MY_PROGRAM_ERROR__EXPECTED_EMPTY_ACCOUNT]: `Expected empty account`,
    [MY_PROGRAM_ERROR__EXPECTED_NON_EMPTY_ACCOUNT]: `Expected non empty account`,
    [MY_PROGRAM_ERROR__EXPECTED_SIGNER_ACCOUNT]: `Expected signer account`,
    [MY_PROGRAM_ERROR__EXPECTED_WRITABLE_ACCOUNT]: `Expected writable account`,
    [MY_PROGRAM_ERROR__INVALID_ACCOUNT_KEY]: `Invalid account key`,
    [MY_PROGRAM_ERROR__INVALID_PDA]: `Invalid PDA derivation`,
    [MY_PROGRAM_ERROR__INVALID_PROGRAM_OWNER]: `Invalid program owner. This likely mean the provided account does not exist`,
    [MY_PROGRAM_ERROR__NUMERICAL_OVERFLOW]: `Numerical overflow`,
    [MY_PROGRAM_ERROR__SERIALIZATION_ERROR]: `Error serializing an account`,
  };
}

export function getMyProgramErrorMessage(code: MyProgramError): string {
  if (process.env.NODE_ENV !== 'production') {
    return (myProgramErrorMessages as Record<MyProgramError, string>)[code];
  }

  return 'Error message not available in production bundles.';
}

export function isMyProgramError<TProgramErrorCode extends MyProgramError>(
  error: unknown,
  transactionMessage: {
    instructions: Record<number, { programAddress: Address }>;
  },
  code?: TProgramErrorCode
): error is SolanaError<typeof SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM> &
  Readonly<{ context: Readonly<{ code: TProgramErrorCode }> }> {
  return isProgramError<TProgramErrorCode>(
    error,
    transactionMessage,
    MY_PROGRAM_PROGRAM_ADDRESS,
    code
  );
}
