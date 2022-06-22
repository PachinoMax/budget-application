import styled from "styled-components";

export const Title = styled.div`
  position: relative;
  max-width: 300px;
  height: 128px;
  display: flex;
  align-items: flex-end;
  margin-left: 15px;
  margin-top: 5px;
`;

export const Subtitle = styled.div`
  position: absolute;
  height: 16px;
  left: 41px;
  top: 15px;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  text-transform: uppercase;
  color: #99a4c2;
`;

export const Icon = styled.div(() => ({
  backgroundImage: `url(./icons/channel-icon.png)`,
  backgroundSize: "cover",
  width: "46px",
  height: "36px",
  margin: "auto 12px 30px 0px",
}));

export const Name = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 21px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #222a41;
  margin: 0 0 40px 0;
`;

export const ScrollBlock = styled.div`
	positon: relative;
	width: 200px;
	height: 128px;
	display: flex;
	background: linear-gradient(
	  90deg,
	  rgba(169, 181, 210, 0.0001) 0%,
	  rgba(112, 126, 167, 0.134454) 100%
	);
	opacity: 0.5;
`;