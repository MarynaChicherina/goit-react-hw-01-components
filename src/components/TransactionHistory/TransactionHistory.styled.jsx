import styled from 'styled-components';

export const Table = styled.table`
width: 600px; 
table-layout: fixed;
border-collapse: collapse;
background-color: white;
border: 1px solid #ccc;
border-spacing: 3px;
box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
`

export const Thead = styled.thead`
background-color: #46b7c2;
`
export const TableTitle = styled.th`
color: white;
text-transform: uppercase;
font-size: 24px;
font-weight: 500;
padding: 10px 0;
border: 1px solid #a1bfcc;
text-align: center;
`
export const TableRow = styled.tr`
border: 1px solid #ccc;
  &:nth-child(2n) {
    background-color: rgba(0, 0, 0, 0.10);
}
`
export const TableData = styled.td`
font-size: 18px;
text-align: center;
padding: 10px 28px; 
border-right: 1px solid #a1bfcc;
`

