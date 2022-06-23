import React from "react";
import { IChannel } from "redux/interfaces";
import { Container } from "./style";
import TableRow from "./table-row";

interface TableProps {
  channel: IChannel;
}

export default function Table(props: TableProps): React.ReactElement {  
  return (
    <Container>
      <TableRow channel={props.channel} />
    </Container>
  );
}
