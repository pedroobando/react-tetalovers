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

// Categories
export const listenToCategoriesFromFirestore = () => {
  return db.collection('categories');
};

export const listenToCategoryFromFirestore = (categoryId) => {
  return db.collection('categories').doc(categoryId);
};

export const addCategoryToFirestore = (category) => {
  return db.collection('categories').add({
    ...category,
    dateCreate: 'Diana',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
    attendees: firebase.firestore.FieldValue.arrayUnion({
      id: cuid(),
      displayName: 'Diana',
      photoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
    }),
  });
};

export const updateCategoryInFirestore = (category) => {
  return db.collection('categories').doc(category.id).update(category);
};

export const deleteCategoryInFirestore = (categoryId) => {
  return db.collection('categories').doc(categoryId).delete();
};

// Products
export const listenToProductsFromFirestore = () => {
  return db.collection('products');
};

export const listenToProductsByCatFromFirestore = (categoryId) => {
  return db.collection('products').where('categoryId', '==', categoryId);
};

export const listenToProductFromFirestore = (productId) => {
  return db.collection('products').doc(productId);
};

export const addProductToFirestore = (product) => {
  return db.collection('products').add({
    ...product,
  });
};

export const updateProductInFirestore = (product) => {
  return db.collection('products').doc(product.id).update(product);
};

export const deleteProductInFirestore = (productId) => {
  return db.collection('products').doc(productId).delete();
};
