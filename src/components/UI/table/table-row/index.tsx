import { IChannel } from "redux/interfaces";
import { Icon, Name, ScrollBlock, Subtitle, Title } from "./style";

type TableRowProps = {
  channel: IChannel;
}

export default function TableRow(props: TableRowProps): React.ReactElement {
  const { name } = props.channel;
  return (
    <Title>
      <Subtitle>Channel</Subtitle>
      <Icon />
      <Name>{name}</Name>
      <ScrollBlock />
    </Title>
  );
}