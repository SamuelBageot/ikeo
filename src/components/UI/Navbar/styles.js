import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    /* border: 1px solid blue; */

    height: var(--navbar-height);

    display: flex;
    justify-content: space-around;
    align-items: center;
    /* padding: 0 1rem; */
`;

export const Navbar = styled.nav`
    /* border: 1px solid red; */

    width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    display: block;
    width: 120px;
`;

export const Menu = styled.ul`
    list-style: none;
`;

export const Item = styled.li`
    .active:after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        margin: 0;
        left: 0;
        background: var(--color-primary);
        bottom: -6px;
        transition: all .2s;
    }
`;

export const MenuLink = styled(NavLink)`
    position: relative;
    color: var(--color-secondary);
    text-decoration: none;

    :not(:last-of-type) {
        margin-right: 20px;
    }

    :after {
        content: "";
        position: absolute;
        display: block;
        width: 0;
        height: 2px;
        margin: 0;
        left: 0;
        background: var(--color-primary);
        bottom: -6px;
        transition: all .2s;
    }

    :hover:after {
        width: 100%;
    }
`;

export const Cart = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        vertical-align: middle;
    }

    span {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18px;
        height: 18px;
        top: -12px;
        right: -8px;
        background-color: var(--color-primary);
        color: var(--color-secondary);
        border-radius: 50%;
        font-size: 14px;
    }
`;