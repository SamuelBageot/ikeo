import { Link } from "react-router-dom";
import styled from "styled-components";

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
    display: inline-flex;
    align-items: center;
    margin-bottom: 40px;

    svg {
        margin-right: .5rem;
        font-size: 1.5rem;
    }

    &:hover {
        background-color: #c5a491;
        color: #453227;
    }
`;