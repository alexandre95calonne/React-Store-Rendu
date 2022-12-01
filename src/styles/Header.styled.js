import styled from 'styled-components'

export const Global = styled.div`
height: 70px;
width: 100vw;
background-color: #454646;
display: flex;

    ul {
        list-style: none;
        display: flex;
        
        li {
            margin-left: 20px;
            margin-top: 10px;
        }
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
`