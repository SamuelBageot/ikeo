import styled from "styled-components";

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProductImg = styled.img`
    width: 300px;
    height: 180px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 5px;
`;

export const ProductInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`;

export const ProductName = styled.h3`
    text-transform: capitalize;
    color: var(--color-secondary);
    font-weight: 400;
    font-size: 22px;
`;

export const ProductPrice = styled.p`
    color: var(--color-primary);
    font-weight: 600;
    font-size: 18px;
    margin-top: .4rem;
    letter-spacing: 1px;
`;