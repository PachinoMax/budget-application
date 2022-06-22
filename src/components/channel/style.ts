import styled from "styled-components";

export const ChannelIcon = styled.div(() => ({
  backgroundImage: `url(./icons/channel-icon.png)`,
  backgroundSize: "cover",
  width: "36px",
  height: "36px",
  margin: "auto 12px auto 15px",
}));

export const ChannelContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 1366px;
  height: 52px;
  margin: 5px auto;
  background: #f6f7fb;
  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 4px 4px 0px 0px;
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
  width: 1366px;
  height: 581px;
  margin: 0 auto;
  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 0px 0px 4px 4px;
`;