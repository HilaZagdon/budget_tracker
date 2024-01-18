import LogIn from "../components/logIn";
import SignUp from "../components/signUp";
import { useState, useEffect } from "react";


function Auth(props) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedUsers = [...users, { ...user }];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const CheckUser = () => {
    const usersData = JSON.parse(localStorage.getItem("users"));
    if (usersData) {
      const foundUser = usersData.find(
        (u) => u.Email === user.Email && u.Password === user.Password
      );

      if (foundUser) {
        console.log("User found");
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(foundUser));
      } else {
        console.log("User not found");
      }
    }
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("users"));
    if (userData) {
      setUsers(userData);
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (isAuthenticated) {
      const userData = JSON.parse(localStorage.getItem("users"));
      if (userData) {
        setUsers(userData);
      }
    }
  }, [isAuthenticated]);

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setUser({});
  };

  if (isAuthenticated) {    
    return <p>You are logged in. Redirecting...</p>;

  }

  return (
    <div>
      {isLoginMode ? ( 
        <LogIn
          CheckUser={CheckUser} 
          user={user}
          setIsAuthenticated={setIsAuthenticated}
          submitHandler={submitHandler} 
          changeHandler={changeHandler}
        />
      ) : (
        <SignUp submitHandler={submitHandler} changeHandler={changeHandler} />
      )}
      <button type="button" onClick={toggleMode}>
        {isLoginMode ? "Sign Up" : "Already have an account?"}{" "}
      </button>
    </div>
  );
}

export default Auth;
