import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {app} from "../firebase"
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";


export default function  () {
  const dispatch=useDispatch();
    const handleGoogleClick=async()=>{
        try {
            const provider=new GoogleAuthProvider()
            provider.addScope('profile')
            provider.addScope('email')
            const auth=getAuth(app)
            const result=await signInWithPopup(auth,provider);
            const res=await fetch('/api/auth/google',{
              method:"POST",
              headers:{
                "Content-type":"application/json"
              },
              body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL})
            })
            const data=res.json()
            dispatch(signInSuccess(data))
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <button type='button' onClick={handleGoogleClick}
    className='bg-red-500 text-white font-bold p-3 rounded-lg hover:opacity-95'>GOOGLE</button>
  )
}
