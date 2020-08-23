import * as fromTransaction from './transaction.action';

export interface appState {
  plan: string,
  amount: number,
  userName: string
}

export const initialState = {
  plan: '',
  amount: 0,
  userName: ''
};

export function reducer(state: appState = initialState, action: fromTransaction.TransactionAction) {

  switch (action.type) {
    case fromTransaction.CHANGE_PLAN: {
      return {
        ...state,
        plan: action.payload.plan
      }
    }
  }

  return state;
}
