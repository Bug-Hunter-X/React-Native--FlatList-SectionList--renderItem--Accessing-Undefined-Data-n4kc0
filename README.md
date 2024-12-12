# React Native FlatList/SectionList `renderItem` Accessing Undefined Data

This repository demonstrates a common but subtle bug in React Native's FlatList and SectionList components. The problem arises when the `renderItem` function attempts to access data that has not yet been loaded or when there's an index mismatch.

## Bug Description
The bug occurs when `renderItem` executes before the data source is fully populated, leading to attempts to access `undefined` properties of `item`, resulting in crashes or unexpected rendering behavior.  Asynchronous data fetching is a frequent culprit.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run the app on an Android or iOS emulator/device.
4. Observe the initial rendering; it might display errors or blank spaces until the data loads.

## Solution
The solution involves ensuring that `renderItem` only accesses data after it's been successfully loaded.  This typically involves using conditional rendering or handling the loading state. The provided solution shows the use of a loading state and conditional rendering.