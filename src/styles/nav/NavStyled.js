import styled from "@emotion/styled";

export const NavBar = styled.div`
       display:flex;
       align-items: center;
       font-family: 'Sedgwick Ave', cursive;
       background: white;
       padding-left: 40px;
       h1{
              font-size: 48px;
       }
       background: ${({ active }) => active ? '#313131' : 'white'};
       margin-bottom: 40px;
       @media (max-width:665px){
              padding-left: 20px;
       }
`