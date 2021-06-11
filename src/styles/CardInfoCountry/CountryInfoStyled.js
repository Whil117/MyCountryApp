import styled from "@emotion/styled";

export const Card = styled.div`
font-family: 'Roboto', sans-serif;
        width: 698px;
        height: 302px;
        background: #FFFFFF;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin: 10px;
        display: flex;
        li{
            list-style: none;
        }
        img{
            width: 330px;
            height: 302px;
            border-radius: 10px 0 0 10px;
        }
        div:nth-of-type(2){
            margin-left: 20px;
        }
        @media (max-width:655px){
            width: 330px;
            height: 555px;
            display: block;
            img{
                border-radius: 10px 10px 0 0;
            }
        }
`