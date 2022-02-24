import { useState, useEffect } from "react";
import BraidList from "../components/braids/BraidList";

import { DetailsContext } from "./../store/DetailsContext";
import { useContext } from 'react';
import firebase from "./../components/firebase/fireBaseConfig";

/*const app = initializeApp(firebaseConfig);
const db = getFirestore(app);*/
const ref = firebase.firestore().collection('braids');

async function getBraid(setLoadedBraids,setIsLoading) {
  ref.onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    //console.log(items)
    setIsLoading(false);
    setLoadedBraids(items);
    return items;
  });
}




function AllBraidPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBraids, setLoadedBraids] = useState([]);
  const { setAllBraids } = useContext(DetailsContext);


  /*const ref = firebase.firestore().collection('braids');*/
  useEffect(() => {

    setIsLoading(true);
    getBraid(setLoadedBraids,setIsLoading);
  }, []);


  //execute quando il valore di isLoading change

  if (isLoading) {
    return <section>
      <p>Loading ......</p>
    </section>
  }

  return <div >
    <BraidList nameOfPage="All Braids" braids={loadedBraids} />
  </div>;
}

export default AllBraidPage;