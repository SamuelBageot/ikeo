import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    background-color: #eaded7;
`;

export const Services = styled.div`
    width: var(--max-width);
    transform: translateY(20%);
    display: flex;
    flex-direction: column;
    `;

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color:var(--color-secondary);
    `;

export const Title = styled.h2`
    color: #453227;
    font-size: 30px;
    letter-spacing: 1px;
`;

export const Paragraph = styled.p`
    padding: 2rem 0;
`;

export const Cards = styled.div`
    display: flex;
`;

export const Card = styled.article`
    text-align: center;
    padding: 40px 25px;
    background-color: #c5a491;
    border-radius: 5px;

    :not(:last-of-type) {
        margin-right: 20px;
    }

    *:not(:last-child) {
        margin-bottom: 15px;
    }

    svg {
        fill: #453227;
        background-color: #eaded7;
        border-radius: 50px;
        height: 65px;
        width: 65px;
        padding: 15px;
    }
`;

export const ServiceTitle = styled.h3`
    color: #453227;
    text-transform: capitalize;
    font-size: 25px;
`;

export const ServiceText = styled.p`
    color: #5f4435;
    line-height: 30px;
`;