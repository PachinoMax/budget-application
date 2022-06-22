import {combineReducers} from 'redux';
import { channelReducer } from './channel';
import { channelsReducer } from './channels';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const rootReducer = combineReducers({
  channel: channelReducer,
  channels: channelsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector;