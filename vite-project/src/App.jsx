const App = () => {

    const PostFormData=(event)=>{
        event.preventDefault();

        // TOD
        alert('Form submitted!')
    }

return(
<div>
    <form onSubmit={PostFormData}>
        <input placeholder="name" />
        <button type="submit">Submit</button>
    </form>
</div>

);


};

export default App;