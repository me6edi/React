
import Hero from './component/Hero';
// using Function

// const LoginStatusBtn=(status)=>{
//   if(status){
//     return <button>Logout Btn</button>
//   }
//   else{
//     return <button>Login Btn</button>
//   }
// }

const App = () => {

  const status=true;

  // let isLoggedIn = true;

// return(

// <div>

//   <h1>Login status</h1>
//   {LoginStatusBtn(false)}
// </div>

// );

// // using switch

// switch (status) {
//   case true:
//     return <button>Logout</button>

//   case false:
//     return <button>Login</button>

//   default:
//     return null
// }

return(
  // <div>
  //   {/* Ternary operator */}
  //   {
  //     status?
  //     <button>Logout Button</button>
  //     :
  //     <button>Login Button</button>
  //   }
  // </div>

  // Logical And And
  // <div>
  //   <h1>Login status</h1>
  //   {isLoggedIn && <button>Logout</button>}
  // </div>


<div>
<h1>Login Status</h1>
  {(()=>{


    if(status==true)
      return <button>Logout Button</button>
    else{
      return <button>Login Button</button>
    }


  })()}


  <Hero/>
</div>

)


};

export default App;



