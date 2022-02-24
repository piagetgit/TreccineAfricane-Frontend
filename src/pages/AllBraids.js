import { useState, useEffect } from "react";
import BraidList from "../components/braids/BraidList";
import firebase from "./../components/firebase/fireBaseConfig";

const ref = firebase.firestore().collection('braids');

async function getBraid(setLoadedBraids,setIsLoading) {
  ref.where("visible","==",true).onSnapshot((querySnapshot) => {
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