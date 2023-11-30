import './App.css';
import { TextField ,Stack,Button} from '@mui/material';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';


function App() {
  const [total,setTotal]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [time,setTime]=useState(0)

  const [validPriciple,setValidPrinciple]=useState(true)
  const [validRate,setValidRate]=useState(true)
  const [validTime,setValidTime]=useState(true)

  const handleSubmit=(e)=>{
   e.preventDefault()
   if(!principle || !rate || !time){
    alert("Enter Valid Value")
   }
   else{
    let a=principle*rate/100*time
    setTotal(a)
   }
  }
  const validateInput=(e)=>{
    const {name, value}=e.target
    // console.log(type of value)
    // console.log(!!value.match(/[^0-9]{1,}$/))
    if (!!value.match((/^[0-9]{1,}$/))){
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(true)  
      }
    else if (name=='rate')
     {
      setRate(value)
      setValidRate(true)
     }
      else{
        setTime(value)
        setValidTime(true)
      }
    }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setValidRate(false)
      }
      else{
        setTime(value)
        setValidTime(false)
      }
    }
  }
    const   resetFields=()=>{
      setPrinciple(0)
      setTime(0)
      setRate(0)
      setTotal(0)
      setPrinciple(true)
      setValidRate(true)
      setValidTime(true)

        
    }
  

  //  console.log(principle,rate,time)
  return (
    <div  style={{height:'100vh'}} className="w-100 d-flex justify-content-center align-items-center bg-dark">
      <div className='bg-light p-5 rounded'>
      <h1>simple interest calculator</h1>
      <p>Calculate your simple interest easily</p>
      <div style={{backgroundColor:'#ebdb34'}} className='text-center rounded'>
        <h4 className='pt-3'> ₹{' '}{total}</h4>
        <p className='pb-3'>Your total interest</p>
      </div >
      <form className='my-5' onSubmit={(event)=>handleSubmit(event)}>
      <div className='mb-3'>
      <TextField id="outlined-basic1" className='w-100' label="₹ Principle Amount" variant="outlined"
      value={principle || ''} name='principle' onChange={(event)=>validateInput(event)} />
      {
        !validPriciple && 
        <div className='text-danger'>
          *invalid principle amount value
        </div>
      }
      </div>
      <div className='mb-3'>
      <TextField id="outlined-basic2" className='w-100' label="Rate of Interest (p.a) %" variant="outlined"
         value={rate || ''} name='rate' onChange={(event)=>validateInput(event)} />  
           {
        !validRate && 
        <div className='text-danger'>
          * invalid rate value
        </div>
      }
      </div>
      <div className='mb-3'>
      <TextField id="outlined-basic3" className='w-100' label="Time Period(Year)" variant="outlined" 
       value={time || ''} name='time' onChange={(event)=>validateInput(event)}/>
       {
        ! validTime && 
        <div className='text-danger'>
          * invalid years
        </div>
      }
      </div>
      <Stack spacing={2} direction={'row'}>
          <Button  type='submit' style={{height:'50px',width:'250px'}} disabled={validPriciple && validRate && validTime ? false:true}variant="contained" className='bg-dark'>Calculate</Button>
          <Button style={{height:'50px',width:'250px'}}variant="outlined"  onClick={resetFields}>RESET</Button>
      </Stack>
      </form>
    </div>
    </div>
    
  );
}

export default App;
