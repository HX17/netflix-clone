import { useEffect, useState, useContext } from "react";

import { FirebaseContext } from "../context/firebase";

export const useContent = (target) => {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((item) => ({
          ...item.data(),
          docId: item.id,
        }));

        setContent(allContent);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { [target]: content };
};
