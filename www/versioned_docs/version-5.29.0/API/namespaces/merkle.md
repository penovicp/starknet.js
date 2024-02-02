---
id: 'merkle'
title: 'Namespace: merkle'
sidebar_label: 'merkle'
sidebar_position: 0
custom_edit_url: null
---

## Classes

- [MerkleTree](../classes/merkle.MerkleTree.md)

## Functions

### proofMerklePath

▸ **proofMerklePath**(`root`, `leaf`, `path`, `hashMethod?`): `boolean`

Test Merkle tree path

#### Parameters

| Name         | Type                                                                                                     | Default value         | Description                            |
| :----------- | :------------------------------------------------------------------------------------------------------- | :-------------------- | :------------------------------------- |
| `root`       | `string`                                                                                                 | `undefined`           | hex-string                             |
| `leaf`       | `string`                                                                                                 | `undefined`           | hex-string                             |
| `path`       | `string`[]                                                                                               | `undefined`           | hex-string array                       |
| `hashMethod` | (`a`: [`BigNumberish`](types.md#bignumberish), `b`: [`BigNumberish`](types.md#bignumberish)) => `string` | `computePedersenHash` | hash method override, Pedersen default |

#### Returns

`boolean`

#### Defined in

[src/utils/merkle.ts:96](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/merkle.ts#L96)
