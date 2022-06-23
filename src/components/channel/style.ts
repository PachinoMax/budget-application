import styled from "styled-components";

export const ChannelIcon = styled.div(() => ({
  backgroundImage: `url(./icons/channel-icon.svg)`,
  backgroundSize: "contain",
  width: "36px",
  height: "36px",
  margin: "auto 12px auto 15px",
  backgroundColor: '#FF9602',
}));

export const ChannelContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 1340px;
  height: 52px;
  background: #f6f7fb;
  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 4px;
  cursor: pointer;
  margin: 5px 0 0 0;
  
`;

export const ChannelTitle = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  height: 21px;
  margin: auto 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #222a41;
`;

export const BudgetContainer = styled.div`
  width: 1340px;
  height: 581px;
  margin: 0 0 0 0;
  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 0px 0px 4px 4px;
`;