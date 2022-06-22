import { quarters } from "helpers/constants";
import React from "react";
import { IChannel } from "redux/interfaces";
import { useTypedSelector } from "redux/reducers";
import { Container } from "./style";
import TableCell from "./table-cell";
import TableRow from "./table-row";
import {getChannel} from '../../../utils'

interface TableProps {
  channel: IChannel;
}

export default function Table(props: TableProps): React.ReactElement {
  const channel = useTypedSelector(getChannel(props.channel.id));
  const monthsList = channel?.frequency === 'Quarterly' ? quarters : props.channel.months;
  
  return (
    <Container>
      <TableRow channel={props.channel} />
      {monthsList.map((month, index) => {
        return (
          <TableCell key={index} month={month.name} amount={props.channel.amount / monthsList.length} allocation={props.channel.allocation} channel={props.channel}/>
        );
      }
      )}
    </Container>
  );
}
