import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const Content = styled.div`
    display: flex;
    width: var(--max-width);
`;

export const Products = styled.div`
    flex: 1;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    align-items: flex-start;
`;

export const ProductLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const ProductImg = styled.img`
    border-radius: 8px;
    width: 100%;
    display: block;
    height: 200px;
    object-fit: cover;
`;

export const ProductInfos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`;

export const ProductTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--color-secondary);
`;

export const ProductPrice = styled.p`
    color: var(--color-primary);
`;

export const NoProducts = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NoProductsText = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
`;