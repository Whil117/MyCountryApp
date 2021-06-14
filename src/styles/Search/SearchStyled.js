import styled from "@emotion/styled";

export const SearchBar = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
        input{
            border: none;
            padding: 10px;
            width: 377px;
            height: 48px;  
            box-sizing: border-box;
            border-radius: 5px;
            color: ${({active})=> active? 'white' : 'black'};
            background-color: ${({ active }) => active ? '#313131' : 'white'};
            border:${({ active }) => active ? '0.5px solid white' : '0.5px solid #000000'};
        }
        @media (max-width:665px){
               input{
                      width: 220px;
               }
        }
`
export const SearchRegion = styled.div`
       display: flex;
       align-items: flex-start;
       select{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 109px;
        height: 48px;
        background-color: ${({ active }) => active ? '#313131' : 'white'};
        border:${({ active }) => active ? '0.5px solid white' : '0.5px solid #000000'};
        color: ${({ active }) => active ? 'white' : 'black'};
        box-sizing: border-box;
        border-radius: 5px;
       }
`
export const SearchNav = styled.div`
       display: flex;
       align-items: center;
       justify-content: center;
       width: 97%;
       padding-left: 40px;
       font-family: 'Roboto', sans-serif;
       margin-bottom: 50px;
       button{
       display: flex;
       justify-content: center;
       align-items: center;
       padding: 9px 10px;
       width: 48px;
       height: 48px;
       background: #FFFFFF;
       border: 0.5px solid #000000;
       box-sizing: border-box;
       border-radius: 5px;
       background-color: ${({ active }) => active ? '#313131' : 'white'};
       border:${({ active }) => active ? '0.5px solid white' : '0.5px solid #000000'};
       margin-right:10px;
       svg{
              path{
                     fill:${({ active }) => active ?  'white' : 'black'};
              }
       }
       }
       button:active{
              background-color:red;
              svg{
              path{
                     fill:${({ active }) => active ?  'black' : 'white'};
              }
       }
       }
       @media (max-width:665px){
              width: 100%;
              justify-content: center;
              padding-left: 0px;
       }
`
export const DeleteNameCountry = styled.button`
       display: flex;
       justify-content: center;
       align-items: center;
       padding: 9px 10px;
       width: 48px;
       height: 48px;
       background: #FFFFFF;
       border: 0.5px solid #000000;
       box-sizing: border-box;
       border-radius: 5px;
       background-color: ${({ active }) => active ? '#313131' : 'white'};
       border:${({ active }) => active ? '0.5px solid white' : '0.5px solid #000000'};
       margin-right:10px;
       svg{
              path{
                     fill: ${({ active }) => active ? 'white' : 'black'};
              }
       }
`