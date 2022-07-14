import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  & ul {
    display: flex;
    list-style-type: none;
  }
`;

const Header = () => {
  return (
    <Div>
      <h1>MockFurniture</h1>
      <div>
        <Nav>
          <ul>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Checkout</a>
            </li>
          </ul>
        </Nav>
      </div>
    </Div>
  );
};

export default Header;
