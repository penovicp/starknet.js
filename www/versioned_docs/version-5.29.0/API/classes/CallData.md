---
id: 'CallData'
title: 'Class: CallData'
sidebar_label: 'CallData'
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new CallData**(`abi`): [`CallData`](CallData.md)

#### Parameters

| Name  | Type                                |
| :---- | :---------------------------------- |
| `abi` | [`Abi`](../namespaces/types.md#abi) |

#### Returns

[`CallData`](CallData.md)

#### Defined in

[src/utils/calldata/index.ts:48](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L48)

## Properties

### abi

• **abi**: [`Abi`](../namespaces/types.md#abi)

#### Defined in

[src/utils/calldata/index.ts:40](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L40)

---

### parser

• **parser**: `AbiParserInterface`

#### Defined in

[src/utils/calldata/index.ts:42](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L42)

---

### structs

• `Protected` `Readonly` **structs**: [`AbiStructs`](../namespaces/types.md#abistructs)

#### Defined in

[src/utils/calldata/index.ts:44](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L44)

---

### enums

• `Protected` `Readonly` **enums**: [`AbiEnums`](../namespaces/types.md#abienums)

#### Defined in

[src/utils/calldata/index.ts:46](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L46)

## Methods

### compile

▸ **compile**(`rawArgs`): [`Calldata`](../namespaces/types.md#calldata)

Compile contract callData without abi

#### Parameters

| Name      | Type                                        | Description                                                                  |
| :-------- | :------------------------------------------ | :--------------------------------------------------------------------------- |
| `rawArgs` | [`RawArgs`](../namespaces/types.md#rawargs) | RawArgs representing cairo method arguments or string array of compiled data |

#### Returns

[`Calldata`](../namespaces/types.md#calldata)

Calldata

#### Defined in

[src/utils/calldata/index.ts:162](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L162)

---

### getAbiStruct

▸ **getAbiStruct**(`abi`): [`AbiStructs`](../namespaces/types.md#abistructs)

Helper to extract structs from abi

#### Parameters

| Name  | Type                                | Description |
| :---- | :---------------------------------- | :---------- |
| `abi` | [`Abi`](../namespaces/types.md#abi) | Abi         |

#### Returns

[`AbiStructs`](../namespaces/types.md#abistructs)

AbiStructs - structs from abi

#### Defined in

[src/utils/calldata/index.ts:280](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L280)

---

### getAbiEnum

▸ **getAbiEnum**(`abi`): [`AbiEnums`](../namespaces/types.md#abienums)

Helper to extract enums from abi

#### Parameters

| Name  | Type                                | Description |
| :---- | :---------------------------------- | :---------- |
| `abi` | [`Abi`](../namespaces/types.md#abi) | Abi         |

#### Returns

[`AbiEnums`](../namespaces/types.md#abienums)

AbiEnums - enums from abi

#### Defined in

[src/utils/calldata/index.ts:297](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L297)

---

### toCalldata

▸ **toCalldata**(`rawCalldata?`): [`Calldata`](../namespaces/types.md#calldata)

Helper: Compile HexCalldata | RawCalldata | RawArgs

#### Parameters

| Name          | Type                                        | Default value | Description                           |
| :------------ | :------------------------------------------ | :------------ | :------------------------------------ |
| `rawCalldata` | [`RawArgs`](../namespaces/types.md#rawargs) | `[]`          | HexCalldata \| RawCalldata \| RawArgs |

#### Returns

[`Calldata`](../namespaces/types.md#calldata)

Calldata

#### Defined in

[src/utils/calldata/index.ts:316](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L316)

---

### toHex

▸ **toHex**(`raw?`): [`HexCalldata`](../namespaces/types.md#hexcalldata)

Helper: Convert raw to HexCalldata

#### Parameters

| Name  | Type                                        | Default value | Description                           |
| :---- | :------------------------------------------ | :------------ | :------------------------------------ |
| `raw` | [`RawArgs`](../namespaces/types.md#rawargs) | `[]`          | HexCalldata \| RawCalldata \| RawArgs |

#### Returns

[`HexCalldata`](../namespaces/types.md#hexcalldata)

HexCalldata

#### Defined in

[src/utils/calldata/index.ts:325](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L325)

---

### validate

▸ **validate**(`type`, `method`, `args?`): `void`

Validate arguments passed to the method as corresponding to the ones in the abi

#### Parameters

| Name     | Type                                                      | Default value | Description                                              |
| :------- | :-------------------------------------------------------- | :------------ | :------------------------------------------------------- |
| `type`   | [`ValidateType`](../enums/types.ValidateType.md)          | `undefined`   | ValidateType - type of the method                        |
| `method` | `string`                                                  | `undefined`   | string - name of the method                              |
| `args`   | [`ArgsOrCalldata`](../namespaces/types.md#argsorcalldata) | `[]`          | ArgsOrCalldata - arguments that are passed to the method |

#### Returns

`void`

#### Defined in

[src/utils/calldata/index.ts:61](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L61)

---

### compile

▸ **compile**(`method`, `argsCalldata`): [`Calldata`](../namespaces/types.md#calldata)

Compile contract callData with abi
Parse the calldata by using input fields from the abi for that method

#### Parameters

| Name           | Type                                        | Description          |
| :------------- | :------------------------------------------ | :------------------- |
| `method`       | `string`                                    | string - method name |
| `argsCalldata` | [`RawArgs`](../namespaces/types.md#rawargs) | -                    |

#### Returns

[`Calldata`](../namespaces/types.md#calldata)

Calldata - parsed arguments in format that contract is expecting

**`Example`**

```typescript
const calldata = myCallData.compile("constructor", ["0x34a", [1, 3n]]);
```

```typescript
const calldata2 = myCallData.compile("constructor", {list:[1, 3n], balance:"0x34"}); // wrong order is valid
```

#### Defined in

[src/utils/calldata/index.ts:114](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L114)

---

### parse

▸ **parse**(`method`, `response`): [`Result`](../namespaces/types.md#result)

Parse elements of the response array and structuring them into response object

#### Parameters

| Name       | Type       | Description                         |
| :--------- | :--------- | :---------------------------------- |
| `method`   | `string`   | string - method name                |
| `response` | `string`[] | string[] - response from the method |

#### Returns

[`Result`](../namespaces/types.md#result)

Result - parsed response corresponding to the abi

#### Defined in

[src/utils/calldata/index.ts:246](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L246)

---

### format

▸ **format**(`method`, `response`, `format`): [`Result`](../namespaces/types.md#result)

Format cairo method response data to native js values based on provided format schema

#### Parameters

| Name       | Type       | Description                      |
| :--------- | :--------- | :------------------------------- |
| `method`   | `string`   | string - cairo method name       |
| `response` | `string`[] | string[] - cairo method response |
| `format`   | `object`   | object - formatter object schema |

#### Returns

[`Result`](../namespaces/types.md#result)

Result - parsed and formatted response object

#### Defined in

[src/utils/calldata/index.ts:270](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L270)

---

### decodeParameters

▸ **decodeParameters**(`typeCairo`, `response`): [`AllowArray`](../namespaces/types.md#allowarray)<[`Result`](../namespaces/types.md#result)\>

Parse the elements of a contract response and structure them into one or several Result.
In Cairo 0, arrays are not supported.

#### Parameters

| Name        | Type                                                         | Description                                                         |
| :---------- | :----------------------------------------------------------- | :------------------------------------------------------------------ |
| `typeCairo` | [`AllowArray`](../namespaces/types.md#allowarray)<`string`\> | string or string[] - Cairo type name, ex : "hello::hello::UserData" |
| `response`  | `string`[]                                                   | string[] - serialized data corresponding to typeCairo.              |

#### Returns

[`AllowArray`](../namespaces/types.md#allowarray)<[`Result`](../namespaces/types.md#result)\>

Result or Result[] - parsed response corresponding to typeData.

**`Example`**

```ts
const res2=helloCallData.decodeParameters("hello::hello::UserData",["0x123456","0x1"]);
result = { address: 1193046n, is_claimed: true }
```

#### Defined in

[src/utils/calldata/index.ts:340](https://github.com/starknet-io/starknet.js/blob/v5.29.0/src/utils/calldata/index.ts#L340)
