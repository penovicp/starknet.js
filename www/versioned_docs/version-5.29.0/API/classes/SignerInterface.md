---
id: 'SignerInterface'
title: 'Class: SignerInterface'
sidebar_label: 'SignerInterface'
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`Signer`](Signer.md)

## Constructors

### constructor

• **new SignerInterface**(): [`SignerInterface`](SignerInterface.md)

#### Returns

[`SignerInterface`](SignerInterface.md)

## Methods

### getPubKey

▸ **getPubKey**(): `Promise`<`string`\>

Method to get the public key of the signer

#### Returns

`Promise`<`string`\>

format: hex-string

#### Defined in

[src/signer/interface.ts:17](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/interface.ts#L17)

---

### signMessage

▸ **signMessage**(`typedData`, `accountAddress`): `Promise`<[`Signature`](../namespaces/types.md#signature)\>

Signs a JSON object for off-chain usage with the Starknet private key and returns the signature
This adds a message prefix so it can't be interchanged with transactions

#### Parameters

| Name             | Type                                            | Description              |
| :--------------- | :---------------------------------------------- | :----------------------- |
| `typedData`      | [`TypedData`](../interfaces/types.TypedData.md) | JSON object to be signed |
| `accountAddress` | `string`                                        |                          |

#### Returns

`Promise`<[`Signature`](../namespaces/types.md#signature)\>

#### Defined in

[src/signer/interface.ts:26](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/interface.ts#L26)

---

### signTransaction

▸ **signTransaction**(`transactions`, `transactionsDetail`, `abis?`): `Promise`<[`Signature`](../namespaces/types.md#signature)\>

Signs transactions with the Starknet private key and returns the signature

#### Parameters

| Name                 | Type                                                                          | Description                                                                                                                                  |
| :------------------- | :---------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| `transactions`       | [`Call`](../namespaces/types.md#call)[]                                       | Array of Call objects, each including:<br/> - contractAddress<br/> - entrypoint<br/> - calldata<br/>                                         |
| `transactionsDetail` | [`InvocationsSignerDetails`](../interfaces/types.InvocationsSignerDetails.md) | InvocationsSignerDetails object with:<br/> - walletAddress<br/> - chainId<br/> - cairoVersion<br/> - maxFee<br/> - version<br/> - nonce<br/> |
| `abis?`              | [`Abi`](../namespaces/types.md#abi)[]                                         | (optional) An array of Abi objects for displaying decoded data                                                                               |

#### Returns

`Promise`<[`Signature`](../namespaces/types.md#signature)\>

#### Defined in

[src/signer/interface.ts:44](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/interface.ts#L44)

---

### signDeployAccountTransaction

▸ **signDeployAccountTransaction**(`transaction`): `Promise`<[`Signature`](../namespaces/types.md#signature)\>

Signs a DEPLOY_ACCOUNT transaction with the Starknet private key and returns the signature

#### Parameters

| Name          | Type                                                                              |
| :------------ | :-------------------------------------------------------------------------------- |
| `transaction` | [`DeployAccountSignerDetails`](../namespaces/types.md#deployaccountsignerdetails) |

#### Returns

`Promise`<[`Signature`](../namespaces/types.md#signature)\>

#### Defined in

[src/signer/interface.ts:63](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/interface.ts#L63)

---

### signDeclareTransaction

▸ **signDeclareTransaction**(`transaction`): `Promise`<[`Signature`](../namespaces/types.md#signature)\>

Signs a DECLARE transaction with the Starknet private key and returns the signature

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `transaction` | [`DeclareSignerDetails`](../interfaces/types.DeclareSignerDetails.md) |

#### Returns

`Promise`<[`Signature`](../namespaces/types.md#signature)\>

#### Defined in

[src/signer/interface.ts:79](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/interface.ts#L79)
