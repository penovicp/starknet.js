---
id: 'ContractInterface'
title: 'Class: ContractInterface'
sidebar_label: 'ContractInterface'
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`Contract`](Contract.md)

## Indexable

▪ [key: `string`]: [`AsyncContractFunction`](../namespaces/types.md#asynccontractfunction) \| `any`

## Constructors

### constructor

• **new ContractInterface**(): [`ContractInterface`](ContractInterface.md)

#### Returns

[`ContractInterface`](ContractInterface.md)

## Properties

### abi

• `Abstract` **abi**: [`Abi`](../namespaces/types.md#abi)

#### Defined in

[src/contract/interface.ts:50](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L50)

---

### address

• `Abstract` **address**: `string`

#### Defined in

[src/contract/interface.ts:52](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L52)

---

### providerOrAccount

• `Abstract` **providerOrAccount**: [`ProviderInterface`](ProviderInterface.md) \| [`AccountInterface`](AccountInterface.md)

#### Defined in

[src/contract/interface.ts:54](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L54)

---

### deployTransactionHash

• `Optional` `Abstract` **deployTransactionHash**: `string`

#### Defined in

[src/contract/interface.ts:56](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L56)

---

### functions

• `Readonly` **functions**: `Object`

#### Index signature

▪ [name: `string`]: [`AsyncContractFunction`](../namespaces/types.md#asynccontractfunction)

#### Defined in

[src/contract/interface.ts:58](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L58)

---

### callStatic

• `Readonly` **callStatic**: `Object`

#### Index signature

▪ [name: `string`]: [`AsyncContractFunction`](../namespaces/types.md#asynccontractfunction)

#### Defined in

[src/contract/interface.ts:60](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L60)

---

### populateTransaction

• `Readonly` **populateTransaction**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../namespaces/types.md#contractfunction)

#### Defined in

[src/contract/interface.ts:62](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L62)

---

### estimateFee

• `Readonly` **estimateFee**: `Object`

#### Index signature

▪ [name: `string`]: [`ContractFunction`](../namespaces/types.md#contractfunction)

#### Defined in

[src/contract/interface.ts:64](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L64)

## Methods

### attach

▸ **attach**(`address`): `void`

Saves the address of the contract deployed on network that will be used for interaction

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `address` | `string` | address of the contract |

#### Returns

`void`

#### Defined in

[src/contract/interface.ts:73](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L73)

---

### connect

▸ **connect**(`providerOrAccount`): `void`

Attaches to new Provider or Account

#### Parameters

| Name                | Type                                                                                     | Description                          |
| :------------------ | :--------------------------------------------------------------------------------------- | :----------------------------------- |
| `providerOrAccount` | [`ProviderInterface`](ProviderInterface.md) \| [`AccountInterface`](AccountInterface.md) | new Provider or Account to attach to |

#### Returns

`void`

#### Defined in

[src/contract/interface.ts:80](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L80)

---

### deployed

▸ **deployed**(): `Promise`<[`ContractInterface`](ContractInterface.md)\>

Resolves when contract is deployed on the network or when no deployment transaction is found

#### Returns

`Promise`<[`ContractInterface`](ContractInterface.md)\>

Promise that resolves when contract is deployed on the network or when no deployment transaction is found

**`Throws`**

When deployment fails

#### Defined in

[src/contract/interface.ts:88](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L88)

---

### call

▸ **call**(`method`, `args?`, `options?`): `Promise`<[`Result`](../namespaces/types.md#result)\>

Calls a method on a contract

#### Parameters

| Name       | Type                                                      | Description                         |
| :--------- | :-------------------------------------------------------- | :---------------------------------- |
| `method`   | `string`                                                  | name of the method                  |
| `args?`    | [`ArgsOrCalldata`](../namespaces/types.md#argsorcalldata) | Array of the arguments for the call |
| `options?` | [`CallOptions`](../namespaces/types.md#calloptions)       | optional blockIdentifier            |

#### Returns

`Promise`<[`Result`](../namespaces/types.md#result)\>

Result of the call as an array with key value pars

#### Defined in

[src/contract/interface.ts:98](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L98)

---

### invoke

▸ **invoke**(`method`, `args?`, `options?`): `Promise`<[`InvokeFunctionResponse`](../interfaces/types.InvokeFunctionResponse.md)\>

Invokes a method on a contract

#### Parameters

| Name       | Type                                                      | Description                                       |
| :--------- | :-------------------------------------------------------- | :------------------------------------------------ |
| `method`   | `string`                                                  | name of the method                                |
| `args?`    | [`ArgsOrCalldata`](../namespaces/types.md#argsorcalldata) | Array of the arguments for the invoke or Calldata |
| `options?` | [`InvokeOptions`](../namespaces/types.md#invokeoptions)   |                                                   |

#### Returns

`Promise`<[`InvokeFunctionResponse`](../interfaces/types.InvokeFunctionResponse.md)\>

Add Transaction Response

#### Defined in

[src/contract/interface.ts:112](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L112)

---

### estimate

▸ **estimate**(`method`, `args?`, `options?`): `Promise`<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

Estimates a method on a contract

#### Parameters

| Name                       | Type                                                        | Description                                     |
| :------------------------- | :---------------------------------------------------------- | :---------------------------------------------- |
| `method`                   | `string`                                                    | name of the method                              |
| `args?`                    | [`ArgsOrCalldata`](../namespaces/types.md#argsorcalldata)   | Array of the arguments for the call or Calldata |
| `options?`                 | `Object`                                                    | optional blockIdentifier                        |
| `options.blockIdentifier?` | [`BlockIdentifier`](../namespaces/types.md#blockidentifier) | -                                               |

#### Returns

`Promise`<[`EstimateFeeResponse`](../interfaces/types.EstimateFeeResponse.md)\>

#### Defined in

[src/contract/interface.ts:125](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L125)

---

### populate

▸ **populate**(`method`, `args?`): [`Invocation`](../namespaces/types.md#invocation)

Calls a method on a contract

#### Parameters

| Name     | Type                                                      | Description                                     |
| :------- | :-------------------------------------------------------- | :---------------------------------------------- |
| `method` | `string`                                                  | name of the method                              |
| `args?`  | [`ArgsOrCalldata`](../namespaces/types.md#argsorcalldata) | Array of the arguments for the call or Calldata |

#### Returns

[`Invocation`](../namespaces/types.md#invocation)

Invocation object

#### Defined in

[src/contract/interface.ts:140](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L140)

---

### parseEvents

▸ **parseEvents**(`receipt`): [`ParsedEvents`](../namespaces/types.md#parsedevents)

Parse contract events of a GetTransactionReceiptResponse received from waitForTransaction. Based on contract's abi

#### Parameters

| Name      | Type                                                                                    | Description         |
| :-------- | :-------------------------------------------------------------------------------------- | :------------------ |
| `receipt` | [`GetTransactionReceiptResponse`](../namespaces/types.md#gettransactionreceiptresponse) | transaction receipt |

#### Returns

[`ParsedEvents`](../namespaces/types.md#parsedevents)

Events parsed

#### Defined in

[src/contract/interface.ts:148](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L148)

---

### isCairo1

▸ **isCairo1**(): `boolean`

tells if the contract comes from a Cairo 1 contract

#### Returns

`boolean`

TRUE if the contract comes from a Cairo1 contract

**`Example`**

```typescript
const isCairo1: boolean = myContract.isCairo1();
```

#### Defined in

[src/contract/interface.ts:159](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L159)

---

### getVersion

▸ **getVersion**(): `Promise`<[`ContractVersion`](../namespaces/types.md#contractversion)\>

Retrieves the version of the contract (cairo version & compiler version)

#### Returns

`Promise`<[`ContractVersion`](../namespaces/types.md#contractversion)\>

#### Defined in

[src/contract/interface.ts:164](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L164)

---

### typedv1

▸ **typedv1**<`TAbi`\>(`tAbi`): [`TypedContractV1`](../modules.md#typedcontractv1)<`TAbi`\>

#### Type parameters

| Name   | Type                                                                         |
| :----- | :--------------------------------------------------------------------------- |
| `TAbi` | extends readonly (`AbiFunction` \| `AbiEvent` \| `AbiStruct` \| `AbiEnum`)[] |

#### Parameters

| Name   | Type   |
| :----- | :----- |
| `tAbi` | `TAbi` |

#### Returns

[`TypedContractV1`](../modules.md#typedcontractv1)<`TAbi`\>

#### Defined in

[src/contract/interface.ts:166](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L166)

---

### typedv2

▸ **typedv2**<`TAbi`\>(`tAbi`): `TypedContractV2`<`TAbi`\>

#### Type parameters

| Name   | Type                                                                                                                            |
| :----- | :------------------------------------------------------------------------------------------------------------------------------ |
| `TAbi` | extends readonly (`AbiImpl` \| `AbiFunction` \| `AbiInterface` \| `AbiConstructor` \| `AbiEvent` \| `AbiStruct` \| `AbiEnum`)[] |

#### Parameters

| Name   | Type   |
| :----- | :----- |
| `tAbi` | `TAbi` |

#### Returns

`TypedContractV2`<`TAbi`\>

#### Defined in

[src/contract/interface.ts:167](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/contract/interface.ts#L167)
