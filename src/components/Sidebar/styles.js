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
`;

export const SearchInput = styled.input`
    padding: 7px;
    border-radius: 5px;
    border: none;
    background-color: #eaded7;
    color: black;
`;

export const FilterTitle = styled.h5`
    font-size: 1rem;
    margin: .5rem 0 .4rem 0;
`;