import googleLogo from "../assets/google.png"


const handleAuth = () =>{
  window.open("http://localhost:3000/api/v1/user/auth/google","_self")
}


const LoginPage = () => {
  return (
  
    <div className=' flex mx-auto  items-center border-2  gap-3 px-5 bg-orange-50 rounded-2xl  border-orange-200 max-w-80 hover:scale-105 mt-60  cursor-pointer' onClick={handleAuth}>
      <img src={googleLogo} alt="google logo" className=" py-2"/>
      <h1 className="text-2xl font-semibold">Login with Google</h1>
    </div>
      
  )
}

export default LoginPage