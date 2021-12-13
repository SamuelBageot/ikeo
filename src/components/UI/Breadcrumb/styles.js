import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
    background-color: #eaded7;
    display: flex;
    justify-content: center;
`;

export const Breadcrumb = styled.div`
    width: var(--max-width);
    padding: 50px 0;
`;

export const Element = styled.span`
    text-transform: capitalize;
    color: #453227;
    font-size: 34px;
    font-weight: 600;
`;

export const ElementLink = styled(Link)`
    text-transform: capitalize;
    text-decoration: none;
    color: #795744;
    transition: color .3s;
    font-size: 34px;
    font-weight: 600;

    &:hover {
        color: #453227;
    }
`;