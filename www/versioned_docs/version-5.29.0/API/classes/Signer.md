---
id: 'Signer'
title: 'Class: Signer'
sidebar_label: 'Signer'
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`SignerInterface`](SignerInterface.md)

## Constructors

### constructor

• **new Signer**(`pk?`): [`Signer`](Signer.md)

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `pk` | `string` \| `Uint8Array` |

#### Returns

[`Signer`](Signer.md)

#### Defined in

[src/signer/default.ts:26](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/default.ts#L26)

## Properties

### pk

• `Protected` **pk**: `string` \| `Uint8Array`

#### Defined in

[src/signer/default.ts:24](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/default.ts#L24)

## Methods

### getPubKey

▸ **getPubKey**(): `Promise`<`string`\>

Method to get the public key of the signer

#### Returns

`Promise`<`string`\>

format: hex-string

#### Implementation of

[SignerInterface](SignerInterface.md).[getPubKey](SignerInterface.md#getpubkey)

#### Defined in

[src/signer/default.ts:30](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/default.ts#L30)

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

#### Implementation of

[SignerInterface](SignerInterface.md).[signMessage](SignerInterface.md#signmessage)

#### Defined in

[src/signer/default.ts:34](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/default.ts#L34)

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

#### Implementation of

[SignerInterface](SignerInterface.md).[signTransaction](SignerInterface.md#signtransaction)

#### Defined in

[src/signer/default.ts:39](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/default.ts#L39)

---

### signDeployAccountTransaction

▸ **signDeployAccountTransaction**(`«destructured»`): `Promise`<[`Signature`](../namespaces/types.md#signature)\>

Signs a DEPLOY_ACCOUNT transaction with the Starknet private key and returns the signature

#### Parameters

| Name             | Type                                                                              |
| :--------------- | :-------------------------------------------------------------------------------- |
| `«destructured»` | [`DeployAccountSignerDetails`](../namespaces/types.md#deployaccountsignerdetails) |

#### Returns

`Promise`<[`Signature`](../namespaces/types.md#signature)\>

#### Implementation of

[SignerInterface](SignerInterface.md).[signDeployAccountTransaction](SignerInterface.md#signdeployaccounttransaction)

#### Defined in

[src/signer/default.ts:63](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/default.ts#L63)

---

### signDeclareTransaction

▸ **signDeclareTransaction**(`«destructured»`): `Promise`<[`Signature`](../namespaces/types.md#signature)\>

Signs a DECLARE transaction with the Starknet private key and returns the signature

#### Parameters

| Name             | Type                                                                  |
| :--------------- | :-------------------------------------------------------------------- |
| `«destructured»` | [`DeclareSignerDetails`](../interfaces/types.DeclareSignerDetails.md) |

#### Returns

`Promise`<[`Signature`](../namespaces/types.md#signature)\>

#### Implementation of

[SignerInterface](SignerInterface.md).[signDeclareTransaction](SignerInterface.md#signdeclaretransaction)

#### Defined in

[src/signer/default.ts:87](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/signer/default.ts#L87)
