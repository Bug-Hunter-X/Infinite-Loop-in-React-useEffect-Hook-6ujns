# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by improperly using the `useEffect` hook.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides the corrected version.

## Bug Description
The `useEffect` hook in `MyComponent` attempts to update the `count` state within the callback function, and the `count` state is also included in the dependency array. This creates a cycle, leading to an infinite loop and potential crashes.