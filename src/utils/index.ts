import { IChannel } from "redux/interfaces";
import { RootState } from "redux/reducers";

export const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear.toString().substring(2);
}

export const getChannel = (channelId: string) => (state : RootState) => {
  return state.channels.channels.find((channel : IChannel) => channel.id === channelId);
}