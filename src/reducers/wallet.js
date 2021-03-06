// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { payload, exchangeRates } = action;
  switch (action.type) {
  case 'REQUEST_CURRENCY':
    return state;
  case 'RECEIVE_CURRENCY':
    return (
      { ...state,
        currencies: [payload.USD.code, ...Object.keys(payload).slice(2)],
      }
    );
  case 'ADD_EXPENSES':
    delete exchangeRates.USDT;
    return ({ ...state, expenses: [...state.expenses, { ...payload, exchangeRates }] });
  default:
    return state;
  }
}

export default wallet;
