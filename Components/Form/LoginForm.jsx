import React, { useEffect , useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { SAVE_USER } from '../../Redux/User'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useFetch from '../../hooks/useFetch'
import useValid from '../../hooks/useValid'
import { toast } from 'react-toastify'

const LoginForm = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const mode = useSelector( state => state.mode.value )

    const [ user,setUser ] = useState(null)
    const [ loading , setLoading ] = useState(false)
    const [ emptyFields , setEmptyFields ] = useState(null)

    const HandleLogin = async e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        // const { nullKeys , validStatus } = await useValid(form)
        // if(validStatus == false) {
        //     setEmptyFields(nullKeys)
        // }
        let values = {}
        for(var entry of form.entries()) {
            values[entry[0]] = entry[1]
        }
        let options = {
            data: values
        }
        const { response , isLoading } = await useFetch('post',`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,options)
        if(response.data.code == 200) {
            toast.success("Login Successfull!!")
            router.push('/')
            dispatch(SAVE_USER(response.data.data))
        } else {
            toast.success("Login Failed!!")
        }
        setUser(response.data)
        setLoading(isLoading)
    }

    useEffect(()=> {
        localStorage.setItem('user',user)
    }, [user , emptyFields])
  return (
    <div className={`${ mode == 'dark' && 'dark' } h-full`}>
        <div className="flex justify-center items-center h-full">
            <form onSubmit={HandleLogin} className='w-[80%] h-[80%] flex flex-col justify-center items-center p-5'>
                <div id="heading" className='text-center py-3'>
                    <span className="text-start text-4xl tracking-tighter">Login</span>
                </div>
                <div className="flex flex-col gap-1 m-1 w-[60%]">
                    <label htmlFor="email" className='text-sm font-medium text-gray-600 my-1'>Email</label>
                    <input 
                        type="text" 
                        className='bg-gray-100 w-full h-10 transition-all duration-500 rounded-3xl focus:outline-4 focus:outline-teal-200 focus:bg-white px-4 font-light text-sm text-gray-400 placeholder:text-gray-400 my-2'
                        placeholder='E-Mail'
                        id="email"
                        name="email"
                        autoComplete='off'
                    />
                </div>
                <div className="flex flex-col gap-1 m-1 w-[60%]">
                    <label htmlFor="password" className='text-sm font-medium text-gray-600 my-1'>Password</label>
                    <input 
                        className='bg-gray-100 w-full h-10 rounded-3xl focus:outline-4 transition-all duration-500 focus:outline-teal-200 focus:bg-white px-4 font-light text-sm text-gray-400 placeholder:text-gray-400 my-2'
                        placeholder='Enter password'
                        name="password"
                        type="password"
                        id="password"
                    />
                </div>
                <div id="switchAuth">
                    <Link href={`/auth/${'signup'}`}><span className='hover:cursor-pointer text-sm font-medium text-gray-600'>Don&apos;t have on Account? Signup <span className="underline">here</span></span></Link>
                </div>
                <button type='submit' className='h-9 px-3.5 my-8 rounded bg-black text-white text-center transition-all duration-500 lg:hover:bg-neutral-700'>
                    {loading ? 'Loading...' : 'Login'}
                </button>
            </form>
        </div>
    </div>
  )
}

export default LoginForm