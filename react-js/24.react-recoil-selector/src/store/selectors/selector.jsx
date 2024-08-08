import { selector } from "recoil";
import { countAtom } from "../atoms/count";

export const evenSelector = selector({
    key: "evenSelector",
    get: props => {
        const count = props.get(countAtom);
        return count % 2 == 0;
    },
});

export const oddSelector = selector({
    key: "oddSelector",
    get: ({ get }) => {
        const count = get(countAtom);
        return count % 2 != 0;
    },
});

// Above selector only depends upon count from countAtom, so those dependency
// we get using get
// like in useMemo(), we pass and dependency array

// Now, we can use these selectors as we were using countAtom
// Note: selector can depend upon multiple atoms as well as other selectors too
//       so the logic can get complicated as per requirement
