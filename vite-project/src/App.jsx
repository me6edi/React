const App = () => {
// let marks=50;

const city = ['Dhaka','London','Delhi','kolkata']

  return (
    // <div>
    //   {(()=>{


    //     if(marks>=80 && marks<100){
    //       return <h1>A+</h1>
    //     }

    //     else if(marks>=70 && marks<80){
    //       return <h1>A</h1>
    //     }
      
    //     else if(marks>=60 && marks<70){
    //       return <h1>A-</h1>
    //     }

    //     else if(marks>=50 && marks<60){
    //       return <h1>B</h1>
    //     }

    //     else if(marks>=40 && marks<50){
    //       return <h1>c</h1>
    //     }

    //     else{
    //       return <h1>F</h1>
    //     }

    //   })()}

    // </div>

    <div>
      <ol>
          {
            city.map((item,i)=>{

              return <li key={i.toString()}>{item}</li>

            })
          }
      </ol>
    </div>
  );
};

export default App;
