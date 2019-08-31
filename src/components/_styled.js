import styled from '@react-pdf/styled-components'

export const Document = styled.Document``
export const Page = styled.Page`
  backgroundColor: #fff;
  padding-bottom: 54px;
`
export const Row = styled.View`
  flexDirection: row;
  margin: ${p => p.m ? p.m : '11px 54px'};
  margin-top: ${p => p.top ? '27px' : '11px'};
`
export const Col = styled.View`
  flex-direction: column;
  flex-basis: 100%;
  flex: ${props => props.s ? props.s : 1};
`
export const Text = styled.Text`
  font-size: ${props => props.size ? props.size : '10px'};
  color: ${props => props.light ? '#999' : '#333'};
  text-align: ${props => props.right ? 'right' : 'left'};
  line-height: 1.4;
`
export const Heading = styled.Text`
  font-size: 11px;
  color: #000;
  color: ${p => p.highlight ? '#d27992' : '#000'};
  padding:5px;
  margin: 5px;
  margin-top: 0px;
  margin-left: -5px;
  font-family: 'Roboto-Medium';
  text-transform: uppercase;
`
export const Hr = styled.View`
  margin: 0px 54px;
  border:0px dashed #d27992;
  border-bottom-width:1px;
`
