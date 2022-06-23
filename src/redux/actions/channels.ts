import { IChannel, IMonth } from "redux/interfaces";

export const addChannel = (payload: IChannel) => ({
  type: "ADD_CHANNEL",
  payload
}as const);

export const deleteChannel = (payload: string) => ({
  type: "DELETE_CHANNEL",
  payload
} as const);

export const editChannelName = (payload: IChannel) => ({
  type: "EDIT_CHANNEL_NAME",
  payload
} as const);

export const setChannelAmount = (payload: IChannel) => ({
  type: "SET_CHANNEL_AMOUNT",
  payload
}as const );

export const setChannelAllocation = (payload: IChannel) => ({
  type: "SET_CHANNEL_ALLOCATION",
  payload
}as const);

export const setChannelFrequency = (payload: IChannel) => ({
  type: "SET_CHANNEL_FREQUENCY",
  payload
}as const);

export const setChannelMonth = (payload: {id: string, newMonthValue: IMonth}) => ({
  type: "SET_CHANNEL_MONTH",
  payload
}as const);

export const setChannelOpen = (payload: {id: string}) => ({
  type: "SET_CHANNEL_OPEN",
  payload
}as const);

export type Action = ReturnType<typeof addChannel> | ReturnType<typeof deleteChannel> | ReturnType<typeof editChannelName> | ReturnType<typeof setChannelAmount> | ReturnType<typeof setChannelAllocation> | ReturnType<typeof setChannelFrequency> | ReturnType<typeof setChannelMonth> | ReturnType<typeof setChannelOpen>;

