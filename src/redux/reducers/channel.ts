import { months } from 'helpers/constants';
import { Action } from 'redux/actions/channel';
import { IMonth } from 'redux/interfaces';

interface IInitialState {
  id: string;
  name: string;
  allocation: string;
  amount: number;
  frequency: string;
  isOpen: boolean;
  months: IMonth[];
}
const initialState: IInitialState = {
  frequency: '',
  amount: 0,
  name: '',
  allocation: '',
  id: '0',
  months: months,
  isOpen: false,
}

export const channelReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_FREQUENCY":
      return {
        ...state,
        frequency: action.payload,
      }
    case "SET_ALLOCATION":
      return {
        ...state,
        allocation: action.payload,
      }
    case "SET_AMOUNT":
      return {
        ...state,
        amount: action.payload,
      }
    case "SET_MONTH_LIST":
      return {
        ...state,
        months: action.payload,
      }
    case "ADD_CHANNEL":
      return {
        ...state,
        ...action.payload,
      }
    case "SET_MONTH":
      const monthPayload = action.payload;
      const months = state.months.map(month => {
        if (month.name === monthPayload.name) {
          month.value = monthPayload.value;
        }
        return month;
      });
      return {
        ...state,
        months,
      }
    default:
      return state
  }
}