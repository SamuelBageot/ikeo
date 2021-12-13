import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
    height: 80vh;
    background-color: #f1f5f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FeaturedProducts = styled.div`
    width: var(--max-width);
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 40px;
    color: #102a42;
    color: var(--color-secondary);
`;

export const Separator = styled.div`
    height: 4px;
    width: 100px;
    background-color: #ab7a5f;
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

export const Products = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;