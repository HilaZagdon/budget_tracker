import "./signUp.css"

function SignUp(props){
  return (
    <div className="ContainerForSignLog">
      <h1>Sign up</h1>
      <form onSubmit={props.submitHandler}>
        <input
          onChange={props.changeHandler}
          name="Email"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={props.changeHandler}
          name="Password"
          type="password"
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp