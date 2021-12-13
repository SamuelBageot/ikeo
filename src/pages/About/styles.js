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

export const ImgContainer = styled.div`
    width: 31%;
    height: 520px;
    flex: 0 0 auto;
    margin-right: 30px;
`;

export const Img = styled.img`
    object-fit: cover;
    border-radius: 5px;
    display: block;
    height: 100%;
    width: 100%;
`;

export const Texts = styled.div`
    flex: 1 1 auto;
`;

export const Title = styled.h1`
    font-size: 42px;
    color: #102a42;
`;

export const Paragraph = styled.p`
    color: #617d98;
    line-height: 2;
`;