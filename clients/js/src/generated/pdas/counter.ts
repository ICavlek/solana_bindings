/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  getAddressEncoder,
  getProgramDerivedAddress,
  getUtf8Encoder,
  type Address,
  type ProgramDerivedAddress,
} from '@solana/web3.js';

export type CounterSeeds = {
  /** The authority of the counter account */
  authority: Address;
};

export async function findCounterPda(
  seeds: CounterSeeds,
  config: { programAddress?: Address | undefined } = {}
): Promise<ProgramDerivedAddress> {
  const {
    programAddress = '2RaKmZtg6Ti7c3v47uajG9KtEG88daRfVTmvzzU4q3kA' as Address<'2RaKmZtg6Ti7c3v47uajG9KtEG88daRfVTmvzzU4q3kA'>,
  } = config;
  return await getProgramDerivedAddress({
    programAddress,
    seeds: [
      getUtf8Encoder().encode('counter'),
      getAddressEncoder().encode(seeds.authority),
    ],
  });
}
