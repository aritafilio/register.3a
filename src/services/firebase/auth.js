import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import conexion from "./index";

function login (email, password) {

const auth = getAuth(conexion);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}
export{
     login
}