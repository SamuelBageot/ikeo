import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    /* border: 1px solid red; */
    
    display: flex;
    justify-content: center;
    `;

export const Product = styled.div`
    /* border: 1px solid green; */

    /* display: flex;
    flex-direction: column; */
    width: var(--max-width);
    margin: 4rem 0;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProductInfos = styled.div`
    flex: 1;

    & > :not(:last-child) {
        margin-bottom: .5rem;
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

export const ProductCompany = styled.p`
    color: #324d67;
`;

export const Images = styled.div`
    /* border: 1px solid red; */

    width: 50%;
    height: 500px;
    margin-right: 2rem;

    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        border-radius: 5px;
    }
`;

export const CartActions = styled.div`
    display: flex;
`;

export const Quantity = styled.button`
    height: 3rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid grey;
    background-color: white;
    border-radius: 20px;

    svg {
        cursor: pointer;
        margin: 0 .85rem;
    }
`;

export const QuantityText = styled.p`
    display: inline;
    margin: 0 1rem;
`;

export const CartBtn = styled.button`
    cursor: pointer;
    margin-left: 1.5rem;
    padding: 0 2rem;
    border-radius: 20px;
    border: none;
    background-color: #ab7a5f;
    color: #f1f5f8;
    transition: all .3s;
    text-transform: uppercase;


    :hover {
        background-color: #c5a491;
        color: #453227;
    }
`;