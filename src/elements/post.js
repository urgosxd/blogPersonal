import styled from "styled-components";

export const Postpadding = styled.div`
    .post-ful {
        position: relative;
        margin: 0 auto;
        padding: 0 200px 6vw;
        min-height: 230px;

        background: #fff;
        h2 {
            margin: 0.5em 0 0.4em;

            line-height: 1.25em;
            font-weight: 600;
        }
        p {
            margin: 0 0 1em;
            min-width: 100%;
            font-family: Georgia, serif;
            font-size: 1.25rem;
        }
        h3 {
            margin: 0.5em 0 0.8em -15px;

            font-weight: 600;
        }
        strong {
            font-weight: 700;
            color: #090a0b;
        }
    }
    .post-leyend {
        margin: 0 auto;
        padding: 0 200px 6vw;
        min-height: 230px;

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            line-height: 1.25em;
        }
        p {
            margin: 0 0 1em;
            min-width: 100%;
            font-family: Georgia, serif;
            font-size: 1.25rem;
        }
    }
`;
