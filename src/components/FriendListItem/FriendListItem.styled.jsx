import styled from 'styled-components';

export const FriendAvatar = styled.img`
display: block;
height: auto;
margin-left: 30px;
margin-right: 20px;
width: 48px;
`

export const FriendName = styled.p`
font-weight: 500;
font-size: 24px;
margin: 0;
align-items: center;
`
export const FriendStatus = styled.span`
position: absolute;
top: 28px;
left: 20px;
padding: 6px;
border-radius: 50%;

background-color: ${(props) => {
    return props.isOn ? 'green' : 'red';
}}
`