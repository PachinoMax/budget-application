import { useTypedSelector } from "redux/reducers";
import Table from "components/UI/table";
import { IChannel } from "redux/interfaces";

export default function Tab2(): React.ReactElement {
  const channelsArray = useTypedSelector((state) => state.channels.channels);

  return (
    <>
    {channelsArray.map((channel: IChannel) => {
      return <Table key={channel.id} channel={channel} />
    })}
    </>
  );
}
