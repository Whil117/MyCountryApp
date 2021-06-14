import styled from "@emotion/styled";

export const NavBar = styled.div`
       display:flex;
       justify-content: space-around;
       align-items: center;
       font-family: 'Sedgwick Ave', cursive;
       background: white;
       padding-left: 40px;
       h1{
              font-size: 48px;
       }
       background: ${({ active }) => active ? '#313131' : 'white'};
       margin-bottom: 40px;

       input{
              display:none;
       }
       a{
              display: flex;
              align-items: center;
              color: black;
              text-decoration:none;
       }
       a:hover{
              color: black;
              text-decoration: underline;
       }
       @media (max-width:665px){
              padding-left: 20px;
       }
`
export const LabelsMode = styled.label`
              display: ${({ active }) => active ? 'none' : 'flex'};
              flex-direction: row;
              justify-content: center;
              align-items: center;
              width: 37px;
              height: 37px;
              background-color: #FFFFFF;
              box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
              border-radius: 50px;
              transition: 0.3s;
              transform: scale(1.2,1.2);
`
export const DivLabels = styled.div`
       display: flex;
       justify-content: ${({ active }) => active ? 'flex-end' : 'flex-start'};
       width: 73px;
       height: 35px;
       background: #C9C9C9;
       box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
       border-radius: 15px;
`