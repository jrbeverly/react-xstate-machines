import { createMachine, state, transition, invoke, reduce } from "robot3";
import { useMachine } from "react-robot";

const State = {
  Initial: 'initial',
  Confirm: 'confirm',
  Loading: 'loading',
  Cancel: 'cancel',
};

const confirmationFlow = (confirmationAction) => createMachine({
  initial: state(transition("begin", "confirming")),
  confirming: state(
    transition(State.Confirm, State.Loading),
    transition("cancel", State.Initial)
  ),
  loading: invoke(
    confirmationAction,
    transition("done", State.Initial),
    transition(
      "error",
      "confirming",
      reduce((context, event) => {
        return {
          ...context,
          error: event.error
        };
      })
    )
  )
});

const useConfirmationFlow = (machine) => {
  const [current, send] = useMachine(machine)

  const dispatcher = {
    _send: send,
    _current: current,

    name: () => dispatcher._current.name,

    isOpen: () => dispatcher._current.name === "confirming" || dispatcher._current.name === "loading",

    dialog: () => dispatcher._send('begin'), 
    confirm: () => dispatcher._send(State.Confirm), 
    cancel: () => dispatcher._send(State.Cancel), 
  }

  return dispatcher
}

export { confirmationFlow, useConfirmationFlow };
