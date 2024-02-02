---
id: 'hash'
title: 'Namespace: hash'
sidebar_label: 'hash'
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [poseidon](hash.poseidon.md)

## Variables

### transactionVersion

• `Const` **transactionVersion**: `1n`

#### Defined in

[src/utils/hash.ts:39](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L39)

---

### transactionVersion_2

• `Const` **transactionVersion_2**: `2n`

#### Defined in

[src/utils/hash.ts:40](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L40)

---

### feeTransactionVersion

• `Const` **feeTransactionVersion**: `bigint` = `BN_FEE_TRANSACTION_VERSION_1`

#### Defined in

[src/utils/hash.ts:41](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L41)

---

### feeTransactionVersion_2

• `Const` **feeTransactionVersion_2**: `bigint` = `BN_FEE_TRANSACTION_VERSION_2`

#### Defined in

[src/utils/hash.ts:42](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L42)

## Functions

### getVersionsByType

▸ **getVersionsByType**(`versionType?`): `Object`

Return transaction versions based on version type, default version type is 'transaction'

#### Parameters

| Name           | Type                       |
| :------------- | :------------------------- |
| `versionType?` | `"fee"` \| `"transaction"` |

#### Returns

`Object`

| Name | Type     |
| :--- | :------- |
| `v1` | `bigint` |
| `v2` | `bigint` |

#### Defined in

[src/utils/hash.ts:47](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L47)

---

### computePedersenHash

▸ **computePedersenHash**(`a`, `b`): `string`

#### Parameters

| Name | Type                                    |
| :--- | :-------------------------------------- |
| `a`  | [`BigNumberish`](types.md#bignumberish) |
| `b`  | [`BigNumberish`](types.md#bignumberish) |

#### Returns

`string`

#### Defined in

[src/utils/hash.ts:53](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L53)

---

### computePoseidonHash

▸ **computePoseidonHash**(`a`, `b`): `string`

#### Parameters

| Name | Type                                    |
| :--- | :-------------------------------------- |
| `a`  | [`BigNumberish`](types.md#bignumberish) |
| `b`  | [`BigNumberish`](types.md#bignumberish) |

#### Returns

`string`

#### Defined in

[src/utils/hash.ts:57](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L57)

---

### computeHashOnElements

▸ **computeHashOnElements**(`data`): `string`

Compute pedersen hash from data

#### Parameters

| Name   | Type                                      |
| :----- | :---------------------------------------- |
| `data` | [`BigNumberish`](types.md#bignumberish)[] |

#### Returns

`string`

format: hex-string - pedersen hash

#### Defined in

[src/utils/hash.ts:65](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L65)

---

### computePoseidonHashOnElements

▸ **computePoseidonHashOnElements**(`data`): `string`

#### Parameters

| Name   | Type                                      |
| :----- | :---------------------------------------- |
| `data` | [`BigNumberish`](types.md#bignumberish)[] |

#### Returns

`string`

#### Defined in

[src/utils/hash.ts:73](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L73)

---

### calculateTransactionHashCommon

▸ **calculateTransactionHashCommon**(`txHashPrefix`, `version`, `contractAddress`, `entryPointSelector`, `calldata`, `maxFee`, `chainId`, `additionalData?`): `string`

Calculate transaction pedersen hash for common properties

Following implementation is based on this python [implementation #](https://github.com/starkware-libs/cairo-lang/blob/b614d1867c64f3fb2cf4a4879348cfcf87c3a5a7/src/starkware/starknet/core/os/transaction_hash/transaction_hash.py)

#### Parameters

| Name                 | Type                                                                   | Default value |
| :------------------- | :--------------------------------------------------------------------- | :------------ |
| `txHashPrefix`       | [`TransactionHashPrefix`](../enums/constants.TransactionHashPrefix.md) | `undefined`   |
| `version`            | [`BigNumberish`](types.md#bignumberish)                                | `undefined`   |
| `contractAddress`    | [`BigNumberish`](types.md#bignumberish)                                | `undefined`   |
| `entryPointSelector` | [`BigNumberish`](types.md#bignumberish)                                | `undefined`   |
| `calldata`           | [`RawCalldata`](types.md#rawcalldata)                                  | `undefined`   |
| `maxFee`             | [`BigNumberish`](types.md#bignumberish)                                | `undefined`   |
| `chainId`            | [`StarknetChainId`](../enums/constants.StarknetChainId.md)             | `undefined`   |
| `additionalData`     | [`BigNumberish`](types.md#bignumberish)[]                              | `[]`          |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/hash.ts:83](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L83)

---

### calculateDeployTransactionHash

▸ **calculateDeployTransactionHash**(`contractAddress`, `constructorCalldata`, `version`, `chainId`, `constructorName?`): `string`

Calculate deploy transaction hash

#### Parameters

| Name                  | Type                                                       | Default value   |
| :-------------------- | :--------------------------------------------------------- | :-------------- |
| `contractAddress`     | [`BigNumberish`](types.md#bignumberish)                    | `undefined`     |
| `constructorCalldata` | [`RawCalldata`](types.md#rawcalldata)                      | `undefined`     |
| `version`             | [`BigNumberish`](types.md#bignumberish)                    | `undefined`     |
| `chainId`             | [`StarknetChainId`](../enums/constants.StarknetChainId.md) | `undefined`     |
| `constructorName`     | `string`                                                   | `'constructor'` |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/hash.ts:111](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L111)

---

### calculateDeclareTransactionHash

▸ **calculateDeclareTransactionHash**(`classHash`, `senderAddress`, `version`, `maxFee`, `chainId`, `nonce`, `compiledClassHash?`): `string`

Calculate declare transaction hash

#### Parameters

| Name                 | Type                                                       | Description |
| :------------------- | :--------------------------------------------------------- | :---------- |
| `classHash`          | `string`                                                   | hex-string  |
| `senderAddress`      | [`BigNumberish`](types.md#bignumberish)                    | -           |
| `version`            | [`BigNumberish`](types.md#bignumberish)                    | -           |
| `maxFee`             | [`BigNumberish`](types.md#bignumberish)                    | -           |
| `chainId`            | [`StarknetChainId`](../enums/constants.StarknetChainId.md) | -           |
| `nonce`              | [`BigNumberish`](types.md#bignumberish)                    | -           |
| `compiledClassHash?` | `string`                                                   | hex-string  |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/hash.ts:135](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L135)

---

### calculateDeployAccountTransactionHash

▸ **calculateDeployAccountTransactionHash**(`contractAddress`, `classHash`, `constructorCalldata`, `salt`, `version`, `maxFee`, `chainId`, `nonce`): `string`

Calculate deploy_account transaction hash

#### Parameters

| Name                  | Type                                                       |
| :-------------------- | :--------------------------------------------------------- |
| `contractAddress`     | [`BigNumberish`](types.md#bignumberish)                    |
| `classHash`           | [`BigNumberish`](types.md#bignumberish)                    |
| `constructorCalldata` | [`RawCalldata`](types.md#rawcalldata)                      |
| `salt`                | [`BigNumberish`](types.md#bignumberish)                    |
| `version`             | [`BigNumberish`](types.md#bignumberish)                    |
| `maxFee`              | [`BigNumberish`](types.md#bignumberish)                    |
| `chainId`             | [`StarknetChainId`](../enums/constants.StarknetChainId.md) |
| `nonce`               | [`BigNumberish`](types.md#bignumberish)                    |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/hash.ts:160](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L160)

---

### calculateTransactionHash

▸ **calculateTransactionHash**(`contractAddress`, `version`, `calldata`, `maxFee`, `chainId`, `nonce`): `string`

Calculate invoke transaction hash

#### Parameters

| Name              | Type                                                       |
| :---------------- | :--------------------------------------------------------- |
| `contractAddress` | [`BigNumberish`](types.md#bignumberish)                    |
| `version`         | [`BigNumberish`](types.md#bignumberish)                    |
| `calldata`        | [`RawCalldata`](types.md#rawcalldata)                      |
| `maxFee`          | [`BigNumberish`](types.md#bignumberish)                    |
| `chainId`         | [`StarknetChainId`](../enums/constants.StarknetChainId.md) |
| `nonce`           | [`BigNumberish`](types.md#bignumberish)                    |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/hash.ts:188](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L188)

---

### calculateContractAddressFromHash

▸ **calculateContractAddressFromHash**(`salt`, `classHash`, `constructorCalldata`, `deployerAddress`): `string`

Calculate contract address from class hash

#### Parameters

| Name                  | Type                                    |
| :-------------------- | :-------------------------------------- |
| `salt`                | [`BigNumberish`](types.md#bignumberish) |
| `classHash`           | [`BigNumberish`](types.md#bignumberish) |
| `constructorCalldata` | [`RawArgs`](types.md#rawargs)           |
| `deployerAddress`     | [`BigNumberish`](types.md#bignumberish) |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/hash.ts:212](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L212)

---

### formatSpaces

▸ **formatSpaces**(`json`): `string`

Format json-string to conform starknet json-string

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `json` | `string` | json-string |

#### Returns

`string`

format: json-string

#### Defined in

[src/utils/hash.ts:250](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L250)

---

### default

▸ **default**(`compiledContract`): `string`

Compute hinted class hash for legacy compiled contract (Cairo 0)

#### Parameters

| Name               | Type                                                        |
| :----------------- | :---------------------------------------------------------- |
| `compiledContract` | [`LegacyCompiledContract`](types.md#legacycompiledcontract) |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/hash.ts:272](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L272)

---

### computeLegacyContractClassHash

▸ **computeLegacyContractClassHash**(`contract`): `string`

Computes the class hash for legacy compiled contract (Cairo 0)

#### Parameters

| Name       | Type                                                                    |
| :--------- | :---------------------------------------------------------------------- |
| `contract` | `string` \| [`LegacyCompiledContract`](types.md#legacycompiledcontract) |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/hash.ts:284](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L284)

---

### computeCompiledClassHash

▸ **computeCompiledClassHash**(`casm`): `string`

Compute compiled class hash for contract (Cairo 1)

#### Parameters

| Name   | Type                                      |
| :----- | :---------------------------------------- |
| `casm` | [`CairoAssembly`](types.md#cairoassembly) |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/hash.ts:342](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L342)

---

### computeSierraContractClassHash

▸ **computeSierraContractClassHash**(`sierra`): `string`

Compute sierra contract class hash (Cairo 1)

#### Parameters

| Name     | Type                                        |
| :------- | :------------------------------------------ |
| `sierra` | [`CompiledSierra`](types.md#compiledsierra) |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/hash.ts:387](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L387)

---

### computeContractClassHash

▸ **computeContractClassHash**(`contract`): `string`

Compute ClassHash (sierra or legacy) based on provided contract

#### Parameters

| Name       | Type                                                        |
| :--------- | :---------------------------------------------------------- |
| `contract` | `string` \| [`CompiledContract`](types.md#compiledcontract) |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/hash.ts:424](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L424)

---

### computePedersenHashOnElements

▸ **computePedersenHashOnElements**(`data`): `string`

Compute pedersen hash from data

#### Parameters

| Name   | Type                                      |
| :----- | :---------------------------------------- |
| `data` | [`BigNumberish`](types.md#bignumberish)[] |

#### Returns

`string`

format: hex-string - pedersen hash

#### Defined in

[src/utils/hash.ts:65](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/hash.ts#L65)

---

### keccakBn

▸ **keccakBn**(`value`): `string`

Calculate hex-string keccak hash for a given BigNumberish

BigNumberish -> hex-string keccak hash

#### Parameters

| Name    | Type                                    |
| :------ | :-------------------------------------- |
| `value` | [`BigNumberish`](types.md#bignumberish) |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/selector.ts:14](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/selector.ts#L14)

---

### starknetKeccak

▸ **starknetKeccak**(`str`): `bigint`

Calculate bigint keccak hash for a given string

String -> bigint keccak hash

[Reference](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/starknet/public/abi.py#L17-L22)

#### Parameters

| Name  | Type     | Description                                    |
| :---- | :------- | :--------------------------------------------- |
| `str` | `string` | the value you want to get the keccak hash from |

#### Returns

`bigint`

starknet keccak hash as BigInt

#### Defined in

[src/utils/selector.ts:39](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/selector.ts#L39)

---

### getSelectorFromName

▸ **getSelectorFromName**(`funcName`): `string`

Calculate hex-string selector for a given abi-function-name

Abi-function-name -> hex-string selector

[Reference](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/starknet/public/abi.py#L25-L26)

#### Parameters

| Name       | Type     | Description                         |
| :--------- | :------- | :---------------------------------- |
| `funcName` | `string` | ascii-string of 'abi function name' |

#### Returns

`string`

format: hex-string; selector for 'abi function name'

#### Defined in

[src/utils/selector.ts:54](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/selector.ts#L54)

---

### getSelector

▸ **getSelector**(`value`): `string`

Calculate hex-string selector from abi-function-name, decimal string or hex string

('abi-function-name' or dec-string or hex-string) -> hex-string selector

#### Parameters

| Name    | Type     | Description                              |
| :------ | :------- | :--------------------------------------- |
| `value` | `string` | hex-string \| dec-string \| ascii-string |

#### Returns

`string`

format: hex-string

#### Defined in

[src/utils/selector.ts:67](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/selector.ts#L67)
