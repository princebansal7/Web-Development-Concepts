## State management using recoil

-  recoil gives access to the following
   -  `RecoilRoot`: similar to context provider, whatever component is using the recoil logic, we need to wrap it inside **RecoilRoot** component
   -  `atom`
   -  `useRecoilState()` hook (same as useState, gives value and despatcher function, like count & setCount)
   -  `useRecoilValue()` hook (it gives just the value, like count)
   -  `useSetRecoilState()` hook  (to update the value, like setCount)
- We can choose what our component needs and accordingly use one of the above hook
  

1. Create atom in store/atoms folder and add new file (good practice)
2. create atom which expects 1 object argument having must one unique **key** (it uniquely signifies the atom) and **default** value for your state variable. (which is now represented by atom) | [example](put atom file reference here)
3. use the recoil hooks wherever needed
4. Also wrap the components which uses recoil logic inside RecoilRoot component 
5. [Example]()


**NOTE:** 
We usually define those state variables outside the components which are global and can be used way in depth on DOM tree. Then using these state management libraries is beneficial but if state variable is just component specific then we can use normal state hooks like useState etc