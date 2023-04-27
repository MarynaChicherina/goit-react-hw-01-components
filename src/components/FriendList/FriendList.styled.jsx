import styled from 'styled-components';

export const Friends = styled.ul`
list-style: none;
margin-bottom: 0;
margin: 0;
padding: 0;
font-size: 18px;
`

export const FriendsItem = styled.li`
display: flex;
align-items: center;
justify-content: flex-start;
position: relative;
margin: 0 0 10px 0;
width: 300px;
text-align: center;
padding: 10px 10px;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
background-color: white;
 &:hover {
    background-color: rgba(0, 0, 0, 0.10);
 }
`