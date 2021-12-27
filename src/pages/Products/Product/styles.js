import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid red;
    
    display: flex;
    justify-content: center;
    `;

export const Product = styled.div`
    border: 1px solid green;

    /* display: flex;
    flex-direction: column; */
    width: var(--max-width);
    margin: 6rem 0;
`;

export const BackLink = styled(Link)`
    text-decoration: none;
    background-color: #ab7a5f;
    color: #f1f5f8;
    text-transform: uppercase;
    padding: 8px 15px;
    border-radius: 5px;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 400;
    transition: all .4s;
    display: inline-block;
    margin-bottom: 40px;

    &:hover {
        background-color: #c5a491;
        color: #453227;
    }
`;

export const ProductName = styled.h1`
    text-transform: capitalize;
    color: #102a42;
    font-size: 40px;
    letter-spacing: 1px;
`;

export const ProductPrice = styled.p`
    color: #ab7a5f;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
`;

export const ProductDescription = styled.p`
    color: #324d67;
    line-height: 30px;
`;