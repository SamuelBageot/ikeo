import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const About = styled.div`
    width: var(--max-width);
    display: flex;
    justify-content: space-between;
    margin: 75px 0;
`;

export const Img = styled.img`
    object-fit: cover;
    border-radius: 5px;
    display: block;
    margin-right: 50px;
    width: 30%;
`;

export const Texts = styled.div`

`;

export const Title = styled.h1`
    font-size: 42px;
    color: #102a42;
`;

export const Paragraph = styled.p`
    color: #617d98;
    line-height: 2;
`;