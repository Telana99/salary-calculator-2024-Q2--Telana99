// src/styles.js
import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
`;

export const Title = styled.h1`
    text-align: center;
`;

export const Input = styled.input`
    display: block;
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ListItem = styled.li`
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;
