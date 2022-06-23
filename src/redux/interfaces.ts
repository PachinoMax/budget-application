export interface IChannel {
  id: string;
  name: string;
  allocation: string;
  amount: number;
  frequency: string;
  isOpen: boolean;
  months: IMonth[];
}

export interface IMonth {
  name: string;
  value: number;
}

export interface IChannelsState {
  channels: IChannel[]
}
