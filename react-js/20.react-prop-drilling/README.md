## Prop Drilling

- In our example
                ```
                  App (parent)
                   |
                  Count (Child)
                   |  
                  Buttons (child)
                ```
- We are passing props to App which goes to Count and then it's child i.e, 
 Buttons even when Count child doesn't require it, just for the sake of it's
 child we are passing it to all children => This is called 'Prop Drilling'

- So, here one the child is just mediator to pass the props as it doesn't need the prop, this becomes very ugly in larger code bases as we are drilling down the props.
- `Prop Drilling` concept has nothing with do re-rendering, of-course re-rendering will happen as per dependencies on state variables, but prop drilling is Anti pattern as it make code look ugly and makes code highly verbose and unreadable.
- Prop Drilling is syntactic uneasiness when writing code.
- [Example]()
- To fix Prop Drilling issue, we can use **`Context API`**
