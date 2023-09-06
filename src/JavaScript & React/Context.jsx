import { useState, createContext, useContext } from "react";

const UserContext = createContext();

export default function Context() {

  const [user, setUser] = useState("Use Context");

  return (
    <UserContext.Provider value={user}>
      <img src="/public/hooks.png" alt="Hooks" height={80} />
      <p>O Use Context é um gerenciamento de estado globalmente. Vamos ver um exemplo com todos os paragrafos logo abaixo</p>
      <p>{user}</p>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <p>Component 2</p>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <p>Component 3</p>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <p>Component 4</p>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <div style={{ height: '150px' }}>
        <p>Component 5</p>
        <p>{`${user} again!`}</p>
      </div>
    </>
  );
}

