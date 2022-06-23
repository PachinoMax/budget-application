import { quarters } from "helpers/constants";
import { useState } from "react";
import { IChannel } from "redux/interfaces";
import TableCell from "../table-cell";
import { ArrowIcon, Icon, Name, ScrollBlock, Subtitle, Title, TableCellContainerWrapper, TableCellItem } from "./style";

type TableRowProps = {
  channel: IChannel;
}

export default function TableRow(props: TableRowProps): React.ReactElement {
  const { name, frequency, months } = props.channel;
  const [isMoved, setIsMoved] = useState(false);

  console.log("channel in table", props.channel);

  return (
    <>
      <Title>
        <Subtitle>Channel</Subtitle>
        <Icon />
        <Name>{name}</Name>
        <ScrollBlock />
      </Title>
      <TableCellContainerWrapper>
        <TableCellItem isMoved={isMoved}
        >
          {frequency !== 'Quarterly' && props.channel.months.map((month, index) => {
            return (
              <TableCell key={index} month={month.name} amount={props.channel.amount} allocation={props.channel.allocation} channel={props.channel} />
            );
          }
          )}
          {frequency === 'Quarterly' && quarters.map((quarter, index) => {
            console.log("quarter", quarter);
            return (
              <TableCell key={index} month={quarter.name} amount={props.channel.amount} allocation={props.channel.allocation} channel={props.channel} />
            );
          }
          )}
        </TableCellItem>
      </TableCellContainerWrapper>
      {frequency !== "Quarterly" && (
        <ArrowIcon isMoved={isMoved} onClick={() => setIsMoved(!isMoved)} />
      )}
    </>
  );
}