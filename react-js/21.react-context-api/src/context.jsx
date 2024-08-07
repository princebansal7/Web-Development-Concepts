import { createContext } from "react";

// Creating context for teleport the state for count
export const CountContext = createContext({ count: 0, setCount: () => {} });
// export const CountContext = createContext({ count, setCount });
