import { useState, createContext, useContext } from "react";


const UserContext = createContext();

 export default function Context() {
  const [user, setUser] = useState("Use Context");

  return (
    <UserContext.Provider value={user}>
      <h1>{user}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>

      <h2>Component 2</h2>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h3>Component 3</h3>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h4>Component 4</h4>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h5>Component 5</h5>
      <h6>{`${user} again!`}</h6>
    </>
  );
}

