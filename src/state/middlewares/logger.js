function logger({ getState }) {
  return (next) => (action) => {
    const prevState = getState();
    const returnValue = next(action);
    const newState = getState();
    console.log(
      `DISPATCH\n\ttype: ${action.type}\n\tpayload: ${action.payload ? action.payload : 'none'}`,
      `\n\tprevious state: ${JSON.stringify(prevState, '\n\t', '\t')}`,
      `\n\tnew state: ${JSON.stringify(newState, '\n\t', '\t')}`,
    );
    return returnValue;
  };
}

export default logger;
