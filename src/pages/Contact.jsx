import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


 


const Contact = () => {
const [form, setForm] = useState({name:'', email:'', message:''})
const [isLoading, setIsLoading] = useState(false);
const formRef=useRef(null);

  const handelChange=(e)=>{
   setForm({...form, [e.target.name] : e.target.value})
  };

  const handleSubmit=()=>{
    e.preventDefault();
    setIsLoading(true);
//service_e3pxrjv
//tid: template_i1cs8qx
    emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
 {
  from_name: form.name,
  to_name: "Alireza",
  from_email: form.email,
  message: form.message
 },
 import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then(()=>{
        setIsLoading(false);
        //TODO: SHOW sucess message
        //TODO: HIDE sucess message

        setForm=({name:'', email:'', message:''});

          }    ).catch((error)=>{
            console.log("error")
                    //TODO: SHOW errzADS message

          })
  }

  const handelBlur= (e)=>{ 
 
  }

  const handleFocus=()=>{

  }


  
  return (
<section className='relative flex lg:flex-row flex-col max-container'>
  <div className='flex-1 min-w-[50%] flex flex-col'> 
    <h1 className='head-text'>
    Get in touch
    </h1>
    <form className='w-full flex flex-col gap-7 mt-14 ' onSubmit={handleSubmit}>

<label className='font-semibold' >
  Name
  <input type="text" name='name' className='input'
 placeholder='Johnwick@gmail.com' required value={form.name}
  onChange={handelChange}
  onFocus={handleFocus}
  onBlur={handelBlur} />
</label>

<label className='font-semibold' >
  Email
  <input type="text" name='email' className='input'
 placeholder='Let me know how I can help you!' required value={form.message}
  onChange={handelChange}
  onFocus={handleFocus}
  onBlur={handelBlur} />
</label>


<label className='font-semibold' >
  Your Message
  <input type="textarea" name='message' rows={4} className='input'
 placeholder='Johnwick@gmail.com' required value={form.message}
  onChange={handelChange}
  onFocus={handleFocus}
  onBlur={handelBlur}
  />
</label>
<button type='submit' className='btn' onChange={handelChange}
  onFocus={handleFocus}
  onBlur={handelBlur}
  disabled={isLoading}>
    {isLoading ? 'sending...': 'send Message'}
  </button>

</form>

  </div>
</section> 

)
}

export default Contact