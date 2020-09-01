import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import NotesList from "./NotesList";

const Favorites = () => {
  useFirestoreConnect([
    {
      collection: "note",
      where: ["favorite", "==", true],
      orderBy: ["createdAt", "desc"],
      storeAs: "favnotes",
    },
  ]);
  const favnotes = useSelector(state => state.firestore.ordered.favnotes)
  console.log('favnotes',favnotes)
  return (
      <div><NotesList notes={favnotes} /></div>
  );
};

export default Favorites;
