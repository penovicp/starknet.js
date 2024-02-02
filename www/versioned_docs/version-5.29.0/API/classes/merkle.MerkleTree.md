---
id: 'merkle.MerkleTree'
title: 'Class: MerkleTree'
sidebar_label: 'MerkleTree'
custom_edit_url: null
---

[merkle](../namespaces/merkle.md).MerkleTree

## Constructors

### constructor

• **new MerkleTree**(`leafHashes`, `hashMethod?`): [`MerkleTree`](merkle.MerkleTree.md)

#### Parameters

| Name         | Type                                                                                                                                 | Default value         |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------- | :-------------------- |
| `leafHashes` | `string`[]                                                                                                                           | `undefined`           |
| `hashMethod` | (`a`: [`BigNumberish`](../namespaces/types.md#bignumberish), `b`: [`BigNumberish`](../namespaces/types.md#bignumberish)) => `string` | `computePedersenHash` |

#### Returns

[`MerkleTree`](merkle.MerkleTree.md)

#### Defined in

[src/utils/merkle.ts:13](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/merkle.ts#L13)

## Properties

### leaves

• **leaves**: `string`[]

#### Defined in

[src/utils/merkle.ts:5](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/merkle.ts#L5)

---

### branches

• **branches**: `string`[][] = `[]`

#### Defined in

[src/utils/merkle.ts:7](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/merkle.ts#L7)

---

### root

• **root**: `string`

#### Defined in

[src/utils/merkle.ts:9](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/merkle.ts#L9)

---

### hashMethod

• **hashMethod**: (`a`: [`BigNumberish`](../namespaces/types.md#bignumberish), `b`: [`BigNumberish`](../namespaces/types.md#bignumberish)) => `string`

#### Type declaration

▸ (`a`, `b`): `string`

##### Parameters

| Name | Type                                                  |
| :--- | :---------------------------------------------------- |
| `a`  | [`BigNumberish`](../namespaces/types.md#bignumberish) |
| `b`  | [`BigNumberish`](../namespaces/types.md#bignumberish) |

##### Returns

`string`

#### Defined in

[src/utils/merkle.ts:11](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/merkle.ts#L11)

## Methods

### hash

▸ **hash**(`a`, `b`, `hashMethod?`): `string`

Create hash from ordered a and b, Pedersen hash default

#### Parameters

| Name         | Type                                                                                                                                 | Default value         |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------- | :-------------------- |
| `a`          | [`BigNumberish`](../namespaces/types.md#bignumberish)                                                                                | `undefined`           |
| `b`          | [`BigNumberish`](../namespaces/types.md#bignumberish)                                                                                | `undefined`           |
| `hashMethod` | (`a`: [`BigNumberish`](../namespaces/types.md#bignumberish), `b`: [`BigNumberish`](../namespaces/types.md#bignumberish)) => `string` | `computePedersenHash` |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/merkle.ts:49](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/merkle.ts#L49)

---

### build

▸ **build**(`leaves`): `string`

Create Merkle tree

#### Parameters

| Name     | Type       | Description      |
| :------- | :--------- | :--------------- |
| `leaves` | `string`[] | hex-string array |

#### Returns

`string`

format: hex-string; Merkle tree root

#### Defined in

[src/utils/merkle.ts:27](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/merkle.ts#L27)

---

### getProof

▸ **getProof**(`leaf`, `branch?`, `hashPath?`): `string`[]

Return path to leaf

#### Parameters

| Name       | Type       | Default value | Description      |
| :--------- | :--------- | :------------ | :--------------- |
| `leaf`     | `string`   | `undefined`   | hex-string       |
| `branch`   | `string`[] | `undefined`   | hex-string array |
| `hashPath` | `string`[] | `[]`          | hex-string array |

#### Returns

`string`[]

format: hex-string array

#### Defined in

[src/utils/merkle.ts:65](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/merkle.ts#L65)
