import React, { Suspense, useRef, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
import { Loader } from '@react-three/drei';
import Fox from '../components/Fox';
import { Canvas } from "@react-three/fiber";
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';





const Contact = () => {
const [form, setForm] = useState({name:'', email:'', message:''})
const [isLoading, setIsLoading] = useState('false');
const [currentAnimation,setCurrentAnimation] = useState('idle');
const {alert, showAlert, hideAlert}= useAlert();
const formRef=useRef(null);

  const handelChange=(e)=>{
   setForm({...form, [e.target.name] : e.target.value})
  };

  const handleSubmit=()=>{
    e.preventDefault();
  console.log(EmailJSResponseStatus);
    setIsLoading(true);
    setCurrentAnimation('hit');

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
          showAlert({show: true, text: 'Message sent Successfully!', type: 'success'})
          setTimeout(() => {
            hideAlert();
            setCurrentAnimation('idle')
          }, [3000]);
        setForm=({name:'', email:'', message:''});

          }    ).catch((error)=>{
            showAlert({show: true, text: 'I didnt Recive your message!', type: 'danger'})
            setIsLoading(false);
            setCurrentAnimation('idle');
          })
  }

  const handelBlur= (e)=>setCurrentAnimation('walk');

  const handleFocus=()=>setCurrentAnimation('idle');


  
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
  <input type="email" name='email' className='input'
 placeholder='Let me know how I can help you!' required value={form.email}
  onChange={handelChange}
  onFocus={handleFocus}
  onBlur={handelBlur} />
</label>


<label className='font-semibold' >
  Your Message
  <textarea type="textarea" name='message' rows={4} className='input'
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

  <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.7, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
</section> 

)
}

export default Contact