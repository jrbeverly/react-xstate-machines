# State Machine for Confirmation Dialog

Running through the workshop example of [Build A Confirmation Modal in React with State Machines](https://daveceddia.com/react-confirmation-modal-state-machine/)

## Notes

- In principal, like the idea of representation this kinds of logic "Flows"
- Usage of strings for state is less than ideal, almost would want it to be objects
- Pattern of constructing a "flow" then making use of the "flow"
- Potential opportunities with systems like codegen
- Possible ideas for test evaluation with the states
- Not sure about this library, needs opportunities for _isolation_
- Feels like it doesn't fit with the View -> ViewModel -> Model concept I was thinking of for State Machines
- The 'dispatcher' works similar to what a wrapper over "Modal" would have, what benefits does it bring?
- Consider looking into eventing systems instead, they seem to better encapsulate this idea without strictness of the "machine structure"
- Maybe this could work better when combined with message passing + code generation?
