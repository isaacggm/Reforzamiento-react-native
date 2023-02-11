
import { useFrom } from '../hooks/useFrom';

export const Formularios = () => {

 const {state,email,password,onChange} = useFrom({
    email:'test@test.com',
    password: '123456'
})

  return (
    <>
    <h3>Formularios</h3>
    <input
        type="text"
        className='form-control' 
        placeholder='email'
        onChange={({target})=>onChange(target.value,'email')}/>
    <input
        type="password"
        className='form-control mt-2 mb-2' 
        placeholder='password'
        onChange={({target})=>onChange(target.value,'password')}/>
    <code>
        <pre>{JSON.stringify(state,null,2)}</pre>
    </code>
    </>
  )
}
