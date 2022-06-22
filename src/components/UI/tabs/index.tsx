import React, { useEffect } from 'react';
import { Link, LinkContainer } from './style';
import { tabs } from '../../../helpers/constants';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Tabs(): React.ReactElement {
  const [active, setActive] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setActive(path);
  }, [active, location]);

  const handleClick = (path: string): void => {
    navigate(path);
    setActive(!!path ? path : "");
  }

  return (
    <LinkContainer>
      {tabs.map((tab, index) => (
        <Link
          key={index}
          to={tab.path}
          onClick={() => handleClick(tab.path)}
        >
          {tab.name}
        </Link>
      ))}
    </LinkContainer>
  );
}
