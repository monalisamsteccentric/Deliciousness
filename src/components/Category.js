import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";

function Category() {
  return (
    <List>
      <Slink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </Slink>
      <Slink to={'/cuisine/American'}>
        <FaHamburger />
        <h3>American</h3>
      </Slink>
      <Slink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h3>Thai</h3>
      </Slink>
      <Slink to={'/cuisine/Japanese'}> 
        <GiChopsticks />
        <h3>Japanese</h3>
      </Slink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0rem;
`;

const Slink = styled(NavLink)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   margin-right: 2rem;
   text-decoration: none;
   background: linear-gradient(35deg, #494949, #313131);
   width: 5rem;
   height: 5rem;
   cursor: pointer;
   transform: scale(0.8);

   h3{
     color: white;
     font-size: 0.8rem;
   }
   &.active{
     background: linear-gradient(to right, #f27121,#e94057);
   }

`

export default Category;
