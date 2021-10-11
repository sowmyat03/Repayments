import React,{useState} from 'react';
import './App.css';
import DirectDebit from './components/DirectDebit'
import PaymentFreq from './components/PaymentFreq'
import Actions from './components/Actions'
import styled from 'styled-components'

const App:React.FC=()=> {

  const [amount,setAmount] = useState<number>(356.95);
  const handleClick=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setAmount(parseFloat(e.target.value));
  }
  return (
    <div className="App">
      <Title>Repayments</Title>
      <Wrapper>
        <Info>
          <DirectDebit amount={amount}/>
          <PaymentFreq />
        </Info>
        <Actions handleClick={handleClick}/>
      </Wrapper>
    </div>
  );
}
const Title=styled.h6`
  font-size:31px;
  font-weight:normal;
  margin-bottom:12px;
  color:#062a6d;
`

const Wrapper = styled.div`
  border-top:2px solid #062a6d;
  display:flex;
  
`
const Info=styled.div`
  flex:60%;
  color:#4c4d51;
`
export default App;
