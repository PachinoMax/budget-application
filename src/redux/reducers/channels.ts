import { IChannel } from "redux/interfaces";
import { Action } from '../actions/channels';

interface IInitialState {
  channels: IChannel[],
}

const initialState: IInitialState = {
  channels: [],
}

export const channelsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_CHANNEL":
      return {
        ...state,
        channels: [...state.channels, action.payload],
      }
    case "DELETE_CHANNEL":
      return {
        ...state,
        channels: state.channels.filter(channel => channel.id !== action.payload),
      }
    case "EDIT_CHANNEL_NAME":
      return {
        ...state,
        channels: state.channels.map(channel => {
          if (channel.id === action.payload.id) {
            channel.name = action.payload.name;
          }
          return channel;
        }
        ),
      }
    case "SET_CHANNEL_AMOUNT":
      return {
        ...state,
        channels: state.channels.map(channel => {
          if (channel.id === action.payload.id) {
            channel.amount = action.payload.amount;
          }
          return channel;
        }
        ),
      }
    case "SET_CHANNEL_ALLOCATION":
      return {
        ...state,
        channels: state.channels.map(channel => {
          if (channel.id === action.payload.id) {
            channel.allocation = action.payload.allocation;
          }
          return channel;
        }
        ),
      }
    case "SET_CHANNEL_FREQUENCY":
      return {
        ...state,
        channels: state.channels.map(channel => {
          if (channel.id === action.payload.id) {
            channel.frequency = action.payload.frequency;
          }
          return channel;
        }
        ),
      }
    case "SET_CHANNEL_MONTH":
      const monthAction = action.payload.months;
      const channelAction = action.payload.channel
      return {
        ...state,
        channels: state.channels.map(channel => {
          if (channel.id === channelAction.id) {
            channel.months = channel.months.map(month => {
              if (month.name === monthAction.name) {
                month.value = monthAction.value;
              }
              return month;
            }
            );
          }
          return channel;
        }
        ),
      }
    default:
      return state
  }
}
