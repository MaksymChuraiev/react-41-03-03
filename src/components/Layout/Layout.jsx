import { Outlet } from 'react-router-dom';
import {
  Header,
  HeaderItem,
  HeaderItemLink,
  HeaderList,
  HeaderNav,
} from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <HeaderNav>
          <HeaderList>
            <HeaderItem>
              <HeaderItemLink to="/">Home</HeaderItemLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderItemLink to="add">Add contact</HeaderItemLink>
            </HeaderItem>
          </HeaderList>
        </HeaderNav>
      </Header>
      <Outlet />
    </div>
  );
};
