import React, { useState } from "react";
import { quarters } from "helpers/constants";
import { IChannel } from "redux/interfaces";
import TableCell from "../table-cell";
import { ArrowIcon, Icon, Name, ScrollBlock, Subtitle, Title, TableCellContainerWrapper, TableCellItem } from "./style";

type TableRowProps = {
  channel: IChannel;
}

export default function TableRow(props: TableRowProps): React.ReactElement {
  const { name, frequency, amount, allocation, months } = props.channel;
  const [isMoved, setIsMoved] = useState(false);

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
          {frequency !== 'Quarterly' && months.map((month, index) => {
            return (
              <TableCell key={index} month={month} amount={amount} allocation={allocation} channel={props.channel} frequency={frequency}/>
            );
          }
          )}
          {frequency === 'Quarterly' && quarters.map((quarter, index) => {
            return (
              <TableCell key={index} quarter={quarter.name} month={months[index]} amount={amount} allocation={allocation} channel={props.channel} frequency= {frequency} />
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