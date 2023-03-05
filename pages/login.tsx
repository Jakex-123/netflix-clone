import useAuth from '../hooks/useAuth';
import Head from 'next/head'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormValues {
  email: string,
  password: string
}

function Login() {
  const [login,setLogin]=useState(false);

  const {signIn,signUp}=useAuth()

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async ({email,password}) => {
    if(login){
      await signIn(email,password)
    }
    else{
      await signUp(email,password)
    }
  }
  return (
    <div className='relativ flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img className='absolute h-screen w-screen -z-10 opacity-60 sm:!inline object-cover'
        src="https://rb.gy/p2hphi" alt='' />
      <img
        src="https://rb.gy/ulxxee"
        width={150}
        height={150}
        className="absolute left-4 top-4 md:left-10 md:top-6 cursor-pointer object-contain"
      />
      <form onSubmit={handleSubmit(onSubmit)}
        className='relative mt-24 space-y-8 rounded pt-[60px] pl-[68px] pr-[68px] pb-[40px] bg-black/75 md:mt-0 md:w-[28rem]'>
        <h1 className='font-semibold text-4xl'>Sign In</h1>
        <div className='flex flex-col space-y-5'>
           <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className={`input ${
                errors.email && 'border-b-2 border-orange-500'
              }`}
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px]  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Password"
              className={`input ${
                errors.password && 'border-b-2 border-orange-500'
              }`}
            />
            {errors.password && (
              <p className="p-1 text-[13px]  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
          <button onClick={()=>{setLogin(true)}} className='w-full bg-[#e50914] rounded py-3 font-semibold '>Sign In</button>
          <div className='text-[gray]'>New to Netflix?<button onClick={()=>{setLogin(false)}} className='text-white pl-1'>Sign up now</button>.</div>
        </div>
      </form>
    </div>
  )
}

export default Login