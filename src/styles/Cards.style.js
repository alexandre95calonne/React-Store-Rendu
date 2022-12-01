import styled from 'styled-components'

export const CardsContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #A8C5C5;
    display: flex;
    flex-direction: column;

    h1 {
        text-align: center;
        margin-top: 50px;
    }

    h5 {
        padding-left: 10px;
        padding-right: 10px;
    }

    p {
        padding-left: 10px;
        padding-right: 10px;
    }

    img {
        height: 45px;
        width: 45px;
        padding-left: 10px;
    }

    .ensemble-cards {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }

    .card {
        height: 210px;
        width: 210px;
        margin: 50px;
        background-color: white;
        border-radius: 3px;
    }

    .button {
        width: max-content;
        margin-top: 25px;
        margin-left: 35px;
    }

    .pages {
        text-align: center;
    }
`