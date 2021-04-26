/* eslint-disable no-prototype-builtins */
import cuid from 'cuid';
import firebase from '../config/firebase';

const db = firebase.firestore();

export const dataFromSnapshot = (snapshot) => {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
};

// export const ListenToEventsFromFirestore = () => {
//   return db.collection('events');
// };

export const listenToBannersFromFirestore = () => {
  return db.collection('banners');
};

export const listenToBannerFromFirestore = (bannerId) => {
  return db.collection('banners').doc(bannerId);
};

export const addBannerToFirestore = (banner) => {
  return db.collection('banners').add({
    ...banner,
    hostedBy: 'Diana',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
    attendees: firebase.firestore.FieldValue.arrayUnion({
      id: cuid(),
      displayName: 'Diana',
      photoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
    }),
  });
};

export const updateBannerInFirestore = (banner) => {
  return db.collection('banners').doc(banner.id).update(banner);
};

export const deleteBannerInFirestore = (bannerId) => {
  return db.collection('banners').doc(bannerId).delete();
};

export const cancelEventToggle = (banner) => {
  return db.collection('banners').doc(banner.id).update({
    isCancelled: !banner.isCancelled,
  });
};
