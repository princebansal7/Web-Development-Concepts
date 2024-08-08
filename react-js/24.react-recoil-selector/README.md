## selector in recoil

- selector represents a `derived state`
- You can think of derived state as a output of passing state to a pure function that derives a new value from the said state.
- Derived state means some operation is using state variables, in such cases like we used useMemo() hook to make it optimal
  - Example:
    ```jsx

      // We are doing this:
      function CheckEven() {
         const count = useRecoilValue(countAtom);
         return <>{count % 2 == 0 ? <b>Count is Even</b> : null}</>;
      }

      // this is similar to:
      function CheckEven() {
         const count = useRecoilValue(countAtom);
         const isEven = {count % 2 == 0}; // derived state
         return <>{isEven ? <b>Count is Even</b> : null}</>;
      }

      // we could do like:
      function CheckEven() {
         const count = useRecoilValue(countAtom);
         // using useMemo(), it only re-renders when count changes
         const isEven = useMemo(()=>{
            return count%2==0
         },[count])

         return <>{isEven ? <b>Count is Even</b> : null}</>;
      }
      // So, we want to do same thing, but using recoil
    ```
   - Then selector concept is useful, is isEven depends on count, which is derived from recoil 
   - in store folder, create new folder named selector and add the selector there (can also add in same file which is in atom folder too)
   - selector have similar syntax to atom | [example]()
   - [Selector Example]()