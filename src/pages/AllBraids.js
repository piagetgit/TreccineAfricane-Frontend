import { useState, useEffect } from "react";
import BraidList from "../components/braids/BraidList";
import { initializeApp } from 'firebase/app';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from '../components/firebase/fireBaseConfig';

import { DetailsContext } from "./../store/DetailsContext";
import { useContext } from 'react';

async function getBraid(db) {
  const braids = collection(db, 'braids');
  const braidsSnapshot = await getDocs(braids);
  const braidList = braidsSnapshot.docs.map(doc => doc.data());
  return braidList;
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function AllBraidPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBraids, setLoadedBraids] = useState([]);
  const { setAllBraids } = useContext(DetailsContext);

  useEffect(() => {

    setIsLoading(true);
    getBraid(db).then((response) => {
      return response;
    }).then((data) => {

      const braids = [];

      for (const key in data) {
        const b = {
          id: key,
          ...data[key]/* 
         id:key["id"],
         title:key["title"]*/
        };

        if (b.visible)
          braids.push(b);
        //console.log(b);

      }

      setIsLoading(false);
      setLoadedBraids(braids);
      setAllBraids(loadedBraids);
    }).catch((error) => { console.log("error getting braids:" + error) });



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