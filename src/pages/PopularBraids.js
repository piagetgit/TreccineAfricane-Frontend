import { useState, useEffect } from "react";
import BraidList from "../components/braids/BraidList";
import firebase from "./../components/firebase/fireBaseConfig";

const ref = firebase.firestore().collection('braids');

async function getBraid(setLoadedBraids,setIsLoading) {
  ref.where("popular","==",true).onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    setIsLoading(false);
    setLoadedBraids(items);
   
    return items;
  });
}

function PopularBraids() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBraids, setLoadedBraids] = useState([]);

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
        <BraidList nameOfPage="Polular Braids" braids={loadedBraids} />
    </div>;
}

export default PopularBraids;