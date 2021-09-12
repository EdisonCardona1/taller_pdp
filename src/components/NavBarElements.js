import styled from 'styled-components';

export const Container= styled.div`
`;
export const Wrapper= styled.div`
    
`;

export const LogoCointainer= styled.div`
    display: block;
    color: white;
    text-align: center;
    padding: 15px 15px;
    text-decoration: none;

    svg {
        fill: red;
        maring-rigth: 0.5rem
    }
`;
export const Menu = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 10;
    overflow: hidden;
    width: 100%;
    height: 70px;
    background-color: #23394d;
`;
export const MenuItem = styled.li`
    float: left;
`;
export const MenuItemRight = styled.li`
    float: right;
`;
export const MenuItemLink= styled.h4`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &: hover{
        background-color: #333;
    }
`;