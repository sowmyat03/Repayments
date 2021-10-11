import React from 'react'
import styled from 'styled-components'

interface Iprops{
    amount:number
}
const DirectDebit:React.FC<Iprops> = ({amount}) => {
    return (
        <DebitWrapper>
            <SubTitle>NEXT DIRECT DEBIT</SubTitle>
            <Amount>${amount} in 10days (29 Jul)</Amount>
        </DebitWrapper>
    )
}

const DebitWrapper=styled.div`
    border-bottom:1px solid #ccc;
`
const SubTitle=styled.h6`
    margin-bottom:0px;
`
const Amount=styled.p`
    margin-top:10px;
    font-size:20px;
`

export default DirectDebit

