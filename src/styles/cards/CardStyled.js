import styled from "@emotion/styled";

export const CardDiv = styled.div`
font-family: 'Roboto', sans-serif;
       width: 286px;
       box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
       border-radius: 10px;
       height: 240px;
       display: flex;
       flex-direction: column;
       align-items: center;
       margin: 10px;
       background: ${({ active }) => active ? '#313131' : 'white'};
       color: ${({ active }) => active ? 'white' : ' black'};
       img{
              border-radius: 10px 10px 0 0;
              width:286px;
              height: 180px;
       }
`