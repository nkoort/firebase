
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { initializeApp } from "firebase/app";
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection, addDoc } from "@firebase/firestore"; 

const firebaseConfig = {
   apiKey: "AIzaSyD1wJsslwcN4D3e5k2AcGZRK0wCTyPVtKI",
   authDomain: "project-10557.firebaseapp.com",
   projectId: "project-10557",
   storageBucket: "project-10557.appspot.com",
   messagingSenderId: "995543860451",
   appId: "1:995543860451:web:69f0bf2c20e9e8fbaf31d6"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

try {
   const docRef =  addDoc(collection(db, "users"), {
     first: "Ada",
     last: "Lovelace",
     born: 1815
   });
   console.log("Document written with ID: ", docRef.id);
 } catch (e) {
   console.error("Error adding document: ", e);
 }



// export async function getUsers (data, db) {
   // const products = collection(db, 'project');
   // const addProd = await getFirestore(app).collection('project').doc('products').set(data);
   

   // const prodSnap = await getDocs(products);
   // const productsList = prodSnap.docs.map(doc => doc.data());
   // console.log(productsList);
// }