import { createContext } from "react";

// way-1
// export const CountContext = createContext();

// way-2
export const CountContext = createContext({ count: 0, setCount: () => {} });
