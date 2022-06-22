import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: 30px auto;
`;

export const Title = styled.div`
  width: 100%;
  height: 33px;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.2px;
  color: #182033;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    'SetupTitle SetupTitle SetupTitle'
    'Subtitle Subtitle AddButton';
  gap: 0px 0px;
  justify-content: space-between;
`;

export const SetupTitle = styled.div`
  grid-area: SetupTitle;
  width: 127px;
  height: 25px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #182033;
  margin: 10px 0px;
`;

export const Subtitle = styled.div`
  grid-area: Subtitle;
  width: 678px;
  height: 42px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #99A4C2;
`;

export const LinkContainer = styled.div`
  display: flex;
  max-width: 1440px;
  height: 52px;
  width: 100%;
  margin: 40px 0 15px;
`;

export const Link = styled(NavLink)((props: { active: boolean }) => ({
  width: '50px',
  height: '25px',
  textDecoration: 'none',
  fontSize: '20px',
  fontWeight: 600,
  fontStyle: 'normal',
  lineHeight: '25px',
  margin: '0 26px 40px 0',
  color: '#000000',
  borderBottom: props.active ? '2px solid #000000' : 'none'
}));