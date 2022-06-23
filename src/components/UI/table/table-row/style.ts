import styled from "styled-components";

export const Title = styled.div`
  position: relative;
  max-width: 300px;
  height: 145px;
  display: flex;
  align-items: flex-end;
  margin: 5px 0 0 15px;
`;

export const Subtitle = styled.div`
  position: absolute;
  height: 16px;
  left: 7px;
  top: 15px;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  text-transform: uppercase;
  color: #99a4c2;
`;

export const Icon = styled.div(() => ({
  backgroundImage: `url(./icons/channel-icon.svg)`,
  backgroundSize: "contain",
  width: "36px",
  height: "36px",
  margin: "auto 17px 30px 0",
  backgroundColor: '#FF9602',
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
  margin: 0 0 37px 0;
`;

export const ScrollBlock = styled.div`
	positon: relative;
	width: 100px;
	height: 128px;
	display: flex;
	background: linear-gradient(
	  90deg,
	  rgba(169, 181, 210, 0.0001) 0%,
	  rgba(112, 126, 167, 0.134454) 100%
	);
	opacity: 0.5;
  margin: 0 0 15px 14px;
`;

export const ArrowIcon = styled.div<{isMoved:boolean}>((props: { isMoved: boolean }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: `10px`,
	height: `6.25px`,
	margin: "auto 5px",
	transition: "0.5s",
	backgroundImage: "url(./icons/arrow.svg)",
	transform: `rotate(${props.isMoved ? "180deg" : "0deg"})`,
	backgroundPosition: "center",
	backgroundSize: "contain",
	backgroundRepeat: "no-repeat",
	top: "24px",
	right: "78px",
	position: "absolute",
  cursor: "pointer",
  }));

export const TableCellContainerWrapper = styled.div`
  display: flex;
	overflow: hidden;
	width: 1000px;
	height: 100%;
  `;

export const TableCellItem = styled.div((props: {isMoved : boolean}) => ({
    display: "flex",
    transform: props.isMoved ? "translateX(-25%)" : "translateX(0)",
    transition: "0.5s",
  }));
