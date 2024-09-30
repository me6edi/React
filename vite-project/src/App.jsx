import Hero from './component/Hero';
const App = () => {

// const itemObj ={
//     name:"Mehedi Amin",
//     age:"25",
//     city:"Dhaka",
// }


const BtnClick=()=>{
    alert("Say Hello!");
}


let item =()=> {
    alert("Hey");
}
return(
<div>
{/* <Hero item={itemObj}/> */}
<Hero ChildClick={BtnClick}/>
</div>

);


};

export default App;