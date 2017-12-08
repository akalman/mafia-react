all components implement the following type on their default export

```
Component<A, B, ...N> {
  (A, B, ...N): State => State
}
```

in other words, they all export a function that returns another function which
maps from State to State.  the parameters of the first function differ by
implementation
