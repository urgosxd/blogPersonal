import styled from "styled-components";

export const LayoutWrapper = styled.div`
    line-height: 1.6em;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0;
    color: #313b3f;

    .Publicar:hover {
        filter: invert(100%);
    }

    .from {
        width: 300px;
    }
    .redondo {
        border-radius: 10px;
    }
    .letter {
        letter-spacing: 2px;
    }

    .titulo3 {
        font-size: 2rem !important;
    }
    .titulo6 {
        font-size: 1rem !important;
    }
    .font-500 {
        font-weight: 500;
    }
    .sticky {
        padding: 0.25rem 3rem !important;
    }
    .paddingInicial {
        padding-top: 150px;
    }
    .alturaBaner {
        height: 500px;
    }
    .effectCard {
        top: -45px;
        left: -100px;
    }
    .effectCardtxt {
        top: -400px;
        left: 700px;
        min-height: 375px;
    }
    .hImg {
        height: 500px;
    }
    .MinExcerpt {
        min-height: 120px;
    }
    .imgCard {
        top: 0;
        left: 0;
        object-fit: cover;
        transition: 0.5s;
    }
    .Carta:hover div img {
        opacity: 0;
    }
    .Carta:hover .card-body {
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        padding: 0 10%;
        padding-top: 25%;
    }
    .Carta:hover .card-body .bodyText {
        opacity: 1;
        transition-delay: 0.3s;
    }
    .Carta:hover .card-body .cardDate {
        display: block;
    }
    .cardDate {
        display: none;
    }
    .bodyCard {
        bottom: 5px;
        left: 10%;
        width: 80%;
        height: 60px;
        transition: 0.5s;
        overflow: hidden;
    }
    .bodyText {
        opacity: 0;
        line-height: 1.2em;
        transition: 0.5s;
    }
`;
