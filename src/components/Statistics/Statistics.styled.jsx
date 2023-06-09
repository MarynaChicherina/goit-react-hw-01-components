import styled from 'styled-components';

const setBgColor = props => {
    switch(props.fileType) {
        case '.docx' :
            return '#46b7c2';
        case '.pdf' :
            return '#bf42f5';
        case '.mp3' :
            return '#e691cd';
        case '.psd' :
            return '#e04f64';
        default:
            return 'rgb(0,153,255)' 
    }
 }

export const StatisticsSection = styled.div`
width: 300px;
padding: 0;
text-align: center; 
background-color: white;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);

`
export const StatisticsTitle = styled.h2`
font-weight: 500;
font-size: 24px;
line-height: 1.19;
text-align: center;
text-transform: uppercase;
padding: 20px;
margin: 0;
color: grey;
`
export const StatisticsList = styled.ul`
display: flex;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
font-size: 18px;
`
export const StatisticsItem = styled.li`
margin: 0;
text-align: center;
border-color: grey;
min-width: 40px;
padding: 15px 10px;
background-color: ${setBgColor}
`
export const StatisticsLabel = styled.span`
margin: 0;
padding: 0;
display: block;
margin-bottom: 5px;
font-size: 16px;
color: white;
`
export const StatisticsPercentage = styled.span`

display: block;
font-weight: 500;
font-size: 20px;
margin: 0;
padding: 0;
color: white;
`

