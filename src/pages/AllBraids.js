import { useState, useEffect,useContext } from "react";
import BraidList from "../components/braids/BraidList";
import firebase from "./../components/firebase/fireBaseConfig";
import { DetailsContext } from "./../store/DetailsContext";

const ref = firebase.firestore().collection('braids');

async function getBraid(setIsLoading,setAllBraids) {
  ref.where("visible","==",true).onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });

    setIsLoading(false);
    setAllBraids(items);
    return items;
  });
}

function AllBraidPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { allBraids, setAllBraids } = useContext(DetailsContext);
  useEffect(() => {
    setIsLoading(true);
    getBraid(setIsLoading,setAllBraids);
  }, []);


  //execute quando il valore di isLoading change

  if (isLoading) {
    return <section>
      <p>Loading ......</p>
    </section>
  }

  return <div >
    <BraidList nameOfPage="All Braids" braids={allBraids} />
  </div>;
}

export default AllBraidPage;