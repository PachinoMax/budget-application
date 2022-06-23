import React, { useEffect, useState } from "react";
import { useTypedSelector } from "redux/reducers";
import Table from "components/UI/table";
import { IChannel } from "redux/interfaces";

export default function Tab2(): React.ReactElement {
  const channelsArray = useTypedSelector((state) => state.channels.channels);
  const [channels, setChannels] = useState(channelsArray);

  
  useEffect(() => {
    setChannels(channelsArray);
  }
  , [channelsArray]);
  
  console.log("channelsArray in tab2", channels.map((channel: IChannel) => {
    return channel.months;
    }));

  return (
    <>
    {channels.map((channel: IChannel) => {
      return <Table key={channel.id} channel={channel} />
    })}
    </>
  );
}
