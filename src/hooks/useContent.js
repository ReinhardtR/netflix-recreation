import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../firebase/context";

const useContent = (contentType) => {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(contentType)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContent(allContent);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [contentType, firebase]);

  return { [contentType]: content };
};

export default useContent;
