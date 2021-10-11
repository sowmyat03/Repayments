import React from 'react'
import styled from 'styled-components'

const PaymentFreq:React.FC = () => {
    return (
        <FreqWrapper>
            <SubTitle>PAYMENT FREQUENCY</SubTitle>
            <Frequency>Weekly on Wednesdays</Frequency>
        </FreqWrapper>
    )
}
const FreqWrapper=styled.div`
    border-bottom:1px solid #c2c1c7;
`
const SubTitle=styled.h6`
    margin-bottom:0px;
`
const Frequency=styled.p`
    margin-top:10px;
    font-size:20px;
`

export default PaymentFreq

