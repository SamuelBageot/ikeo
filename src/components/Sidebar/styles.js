import styled from "styled-components";

export const Sidebar = styled.aside`
    /* border: 1px solid green; */
    
    border: 3px solid #eaded7;
    border-radius: 10px;
    position: sticky;
    margin-top: 1rem;
    height: 100%;
    top: 1rem;
    padding: 1rem .5rem;
    /* margin-right: 1rem; */
    /* width: 20%; */

    > :not(:last-child) {
        margin-bottom: 1.5rem;
    }
`;

export const SearchInput = styled.input`
    padding: 7px;
    border-radius: 5px;
    border: none;
    background-color: #eaded7;
    color: black;
    outline: none;
`;

export const FilterTitle = styled.h5`
    font-size: 1rem;
    margin: .5rem 0 .4rem 0;
`;

export const ClearBtn = styled.button`
    outline: none;
    border: none;
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

    &:hover {
        background-color: #c5a491;
        color: #453227;
    }
`;

export const HiddenCheckbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`;

export const Checkbox = styled.input`
    position: absolute;
    top: 0;
    right: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    cursor: pointer;

    :hover {
        background-color: black;
    }
`;