import React, { useEffect, useState } from 'react';
import { Footers } from './Header';
import { LeftBar } from './sidebar';

function InputForm() {
  const [nama, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject]= useState('')
  const [pesan, setPesan] = useState('')

  const [errorNama, setErrorNama]= useState(true)
  const [errorEmail, setErrorEmail]= useState(true)
  const [errorSubject, setErrorSubject]= useState(true)
  const [erroPesan, setErrorPesan]= useState(true)

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const data ={
      nama : nama,
      email :email,
      subject : subject,
      pesan : pesan
    }
    alert(JSON.stringify(data))
  
  };
  useEffect(()=>{
    if( errorNama === true || errorEmail === true || errorSubject === true ){
      document.getElementById("btnsubmit").disabled = true
      document.getElementById("btnsubmit").innerHTML = "Disabled"
    }else {
    document.getElementById("btnsubmit").disabled = false
    document.getElementById("btnsubmit").innerHTML = "Submit"
    }
  },[errorNama, errorEmail, errorSubject])

  return (
    <>
    {/* <LeftBar /> */}
    <div style={{backgroundImage : "url('https://cdn.pixabay.com/photo/2022/12/30/10/47/typewriter-7686634_960_720.jpg')" , backgroundSize :"cover"}}
    className="h-[28rem]">
      <div className='text-white text-center py-44'>
        <h2 className='font-bold text-4xl '>CONTACT.</h2>
        <p className='font-thin text-2xl'>Let's have a chat</p>
      </div>
    </div>
      <div className='bg-black h-[100vh] py-5'>
        <div className='fomr'>
          <form onSubmit={handleSubmit} className='flex flex-col py-[4rem] px-[1rem] m-auto max-w[600px] text-white md:max-w-xl'>
              
              {/* nama */}
              <label className='mb-4'>Nama</label>
              <input type="text" className='mb-4 py-[10px] px-[18px] bg-[rgba(255,255,255,0.1)]'
              value={nama}
              onChange={(e)=>{setName(e.target.value)
              setErrorNama(e.target.value.length === 0 ? true : false)
              }} required
              />
              {errorNama && (
                <p className='text-red-600'>
                  <i>field tidak boleh kosong</i>
                </p>
              )}


              {/* email */}
              <label className='mb-4'>Email</label>
              <input type="email" className='mb-4 py-[10px] px-[18px] bg-[rgba(255,255,255,0.1)]'
              value={email}
              onChange={(e)=>{setEmail(e.target.value)
              setErrorEmail(e.target.value === 0 ? true : false)
              }} required
              />
              {errorEmail  &&(
                <p className="text-red-600">
                  <i>field tidak boleh kosong</i>
                </p>
              )}

              
              {/* subject */}
              <label className='mb-4'>Subject</label>
              <input type="text" className='mb-4 py-[10px] px-[18px] bg-[rgba(255,255,255,0.1)]'
              value={subject}
              onChange={(e)=>{setSubject(e.target.value)
              setErrorSubject(e.target.value === 0 ? true : false )
              }}
              />
              {errorSubject &&(
              <p className="text-red-600">
                <i>field tidak boleh kosong</i>
              </p>
              )}


              {/* pesan */}
              <label className='mb-4'>Message</label>
              <textarea type="text" placeholder='type your message here' className='mb-4 py-[10px] px-[18px] bg-[rgba(255,255,255,0.1)]'
              value={pesan}
              onChange={(e)=>{setPesan(e.target.value) }}
              />
            
            <button 
            id='btnsubmit' 
            type="submit" 
            className='bg-yellow-600 hover:bg-yellow-900 px-3 py-4 text-white rounded-md' 
            disabled={true}>-</button>
          </form>
        </div>
      </div>

    </>
  );
}

export default InputForm;
