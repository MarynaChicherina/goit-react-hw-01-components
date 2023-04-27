import styled from 'styled-components';

export const Image = styled.img`
display: block;
height: auto;
width: 240px;
object-fit: cover;
margin: 10px auto 0;
overflow: hidden;
`
export const ProfileCard = styled.div`
width: 300px;
padding: 0;
text-align: center; 
background-color: white;
&:hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
}

`
export const StatsElement = styled.li`
margin: 0 auto;
text-align: center;
border-color: grey;
width: 80px;
text-align: center;

`
export const StatsCard = styled.ul`
display: flex;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding: 15px 5px;
font-size: 18px;
text-align: justify;
background-color: rgba(0, 0, 0, 0.16);
border-top: 1px dashed grey;
`
export const StatsLabel = styled.span`
margin: 0;
padding: 0;
display: block;
margin-bottom: 5px;
font-size: 16px;

`
export const StatsQuantity = styled.span`

display: block;
font-weight: 500;
margin: 0;
padding: 0;

`

export const ProfileName = styled.p`
font-weight: 500;
margin-bottom: 10px;
margin-top: 10px;
font-size: 24px;
`
export const ProfileTag = styled.p`
margin-top: 0;
margin-bottom: 5px;
font-size: 18px;
color: grey;
`
export const ProfileLocation = styled.p`
margin-top: 0;
margin-bottom: 10px;
font-size: 18px;
color: grey;
`
