import React from "react";
import { IChannel } from "redux/interfaces";
import { useTypedSelector } from "redux/reducers";
import { Container } from "./style";
import TableRow from "./table-row";
import {getChannel} from '../../../utils'

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
