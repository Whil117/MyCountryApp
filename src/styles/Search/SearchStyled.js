import styled from "@emotion/styled";

export const SearchBar = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        input{
            border: none;
           padding: 10px;
            width: 377px;
            height: 48px;   
            background: #FFFFFF;
            border: 0.5px solid #000000;
            box-sizing: border-box;
            border-radius: 5px;
        }
        button{
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              padding: 10px;
              width: 48px;
              height: 48px;
              background: #FFFFFF;
              border: 0.5px solid #000000;
              box-sizing: border-box;
              border-radius: 5px;
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
        background: #FFFFFF;
        border: 0.5px solid #000000;
        box-sizing: border-box;
        border-radius: 5px;
       }
`
export const  SearchNav = styled.div`
       display: flex;
       align-items: center;
       justify-content: space-between;
       width: 490px;
       padding-left: 10px;
       font-family: 'Roboto', sans-serif;

`