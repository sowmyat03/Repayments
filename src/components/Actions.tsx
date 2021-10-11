import React from 'react'
import calendar from '../assets/images/icon-calendar.svg';
import coin from '../assets/images/icon-coin.svg';
import styled from 'styled-components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Props{
    handleClick:(e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const Actions:React.FC<Props> = ({handleClick}) => {
    return (
        <Wrapper>
            <Action>
            <Items>
                <Image src={coin} alt="dollar" />
                <Act>Make an extra payment</Act>
                <Button><NavigateNextIcon style={{ fill: '#36528a',width:'15px'}}/></Button>
            </Items>
            <Ruler />
            <Items>
                <Image src={calendar} alt="calendar" />
                <Act>Change repayment date</Act>
                <Button><NavigateNextIcon style={{ fill: '#36528a',width:'15px' }}/></Button>
            </Items>
            <Ruler />
            <Items>
                <Image src={coin} alt="dollar"/>
                <Act>Change repayment amount</Act>
                <Button><NavigateNextIcon style={{ fill: '#36528a',width:'15px' }}/></Button>
            </Items>
            </Action>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    flex:45%;
    position: relative;
    font-family:sans-serif;
    color:#062a6d;
`
const Action=styled.div`
    width:60%;
    position:absolute;
    top:20px;
    right:0px;
    padding:10px 25px;
    background-color:#f3f6f8;
`
const Items=styled.div`
    display:flex;
    align-items:center;
`
const Ruler=styled.hr`
    border: 0;
    border-bottom: 1.3px solid #ccc;
    margin:0px;
`
const Button=styled.button`
    background:transparent;
    border:none;
    cursor: pointer;
`

const Image=styled.img`
    width:10%;
`
const Act=styled.h6`
    flex:50%;
    font-size:12px;
    padding-left:10px;  
    margin:23px 0px;  
`
export default Actions
