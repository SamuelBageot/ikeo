import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
    /* border: 1px solid green; */
    
    display: flex;
    justify-content: center;

    height: calc(100vh - 75px);
    `;

export const HeroBanner = styled.div`
    /* border: 1px solid red; */

    width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        /* height: 100%; */
        border-radius: 8px;
    }
`;

export const Texts = styled.div`
    /* border: 1px solid blue; */

    width: 43%;

    *:not(:last-child) {
        margin-bottom: 25px;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    letter-spacing: 1px;
    color: var(--color-secondary);
    line-height: 50px;
`;

export const Paragraph = styled.p`
    color: #617d98;
    line-height: 40px;
    font-size: 20px;
`;

export const Images = styled.div`
    /* border: 1px solid orange; */

    position: relative;
    flex-grow: 1;
    height: 550px;
    display: flex;
    justify-content: flex-end;
`;

export const Btn = styled(Link)`
    background-color: #ab7a5f;
    color: #eaded7;
    padding: 12.5px 25px;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
    transition: all .3s;

    :hover {
        background-color: #c5a491;
        color: #453227;
    }
`;