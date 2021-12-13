import styled from "styled-components";

export const Wrapper = styled.section`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Contact = styled.div`
    /* border: 1px solid red; */

    width: var(--max-width);
    display: flex;
    align-items: center;
`;

export const Texts = styled.div`
    width: 50%;
    color: var(--color-secondary);
    margin-right: 6rem;
`;

export const Title = styled.h2`
    font-size: 32px;
    letter-spacing: 1px;
    margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
    line-height: 30px;
`;

export const Form = styled.form`
    /* border: 1px solid red; */

    display: flex;
    flex-direction: column;
    width: 26%;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 2px solid grey;
    background-color: transparent;
    padding: 1rem 0;
    margin-bottom: 1rem;

    :focus {
        outline: none;
    }
`;

export const Btn = styled.button`
    cursor: pointer;
    border: 3px solid var(--color-secondary);
    color: var(--color-secondary);
    font-weight: 600;
    background: none;
    padding: .5rem 0;
    outline: none;
    transition: all .25s;

    :hover {
        background: var(--color-secondary);
        color: white;
    }
`;