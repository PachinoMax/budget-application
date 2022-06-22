import { IChannel, IMonth } from 'redux/interfaces';

export const setFrequncy = (payload: string) => ({
  type: "SET_FREQUENCY",
  payload
} as const);

export const setAllocation = (payload: string) => ({
  type: "SET_ALLOCATION",
  payload
} as const);

export const setAmount = (payload: number) => ({
  type: "SET_AMOUNT",
  payload
} as const);

export const setMonthList = (payload: IMonth[]) => ({
  type: "SET_MONTH_LIST",
  payload
} as const);

export const setMonth = (payload: IMonth) => ({
  type: "SET_MONTH",
  payload
} as const);

export const addChannel = (payload: IChannel) => ({
  type: "ADD_CHANNEL",
  payload
} as const);

export type Action = ReturnType<typeof setFrequncy> | ReturnType<typeof setAllocation> | ReturnType<typeof setAmount> | ReturnType<typeof setMonthList> | ReturnType<typeof setMonth> | ReturnType<typeof addChannel>;