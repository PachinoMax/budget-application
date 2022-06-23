import { useEffect, useMemo, useState } from "react";
import { useTypedSelector } from "redux/reducers";
import { IChannel } from "redux/interfaces";
import Channel from "components/channel";

export default function Tab1(): React.ReactElement {
  const channelsArray = useTypedSelector((state) => state.channels.channels);
  const [channels, setChannels] = useState(channelsArray);

  console.log('channelsArray', channelsArray);
  

  // useMemo(() => {
  //   setChannels(channelsArray);
  // } , [channelsArray]);
  useEffect(() => {
    setChannels(channelsArray);
  } , [channelsArray]);

  return (
    <>
    {channels.map((channel: IChannel) => {
      return <Channel key={channel.id} channel={channel} />
    })}
    </>
  );
};
