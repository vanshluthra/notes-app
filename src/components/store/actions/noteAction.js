import { getFirestore } from "redux-firestore";

export const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("note")
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })
      .then(() => {
        console.log("Added the note successfully");
      })
      .catch((err) => console.log(err));
  };
};

export const deleteNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("note")
      .doc(note.id)
      .delete()
      .then(() => {
        console.log("Deleted the note successfully");
      })
      .catch((err) => console.log(err));
  };
};

export const toggleFav = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const favoriteStatus = !note.favorite;
    const firestore = getFirestore();
    firestore
      .collection("note")
      .doc(note.id)
      .update({
        favorite: favoriteStatus,
      })
      .then(() => {
        console.log("Toggle Favourite successfully");
      })
      .catch((err) => console.log(err));
  };
};

export const updateNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("note")
      .doc(note.id)
      .update({
        title: note.title,
        content: note.content,
      })
      .then(() => {
        console.log("update successfully");
      })
      .catch((err) => console.log(err));
  };
};
