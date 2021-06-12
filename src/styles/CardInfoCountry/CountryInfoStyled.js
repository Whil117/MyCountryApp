import styled from "@emotion/styled";

export const Card = styled.div`
font-family: 'Roboto', sans-serif;
        width: 698px;
        height: 302px;
        background: ${({ active }) => active ? '#313131' : 'white'};
       color: ${({ active }) => active ? 'white' : ' black'};
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin: 10px;
        display: flex;
        padding: 10px;
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
            height: 655px;
            display: block;
            img{
                border-radius: 10px 10px 0 0;
            }
        }
`
export const ButtonCard = styled.button`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 10px;
            width: 60px;
            height: 41px;
            left: 618px;
            top: 250px;
            box-sizing: border-box;
            border-radius: 10px;
            color:${({ active })=> active ? 'white' : 'black'} ;
            background: ${({ active }) => active ? '#313131' : 'white'};
            border:${({ active }) => active ? '0.5px solid white' : '0.5px solid #000000'};
`