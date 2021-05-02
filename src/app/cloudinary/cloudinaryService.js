import { asyncActionError, asyncActionFinish, asyncActionStart } from '../async/asyncReducer';

const cloudURL = 'https://api.cloudinary.com/v1_1/dj34u7d2f7o/upload';

export const uploadToCloudinary = async ({ file }) => {
  const formData = new FormData();
  formData.append('upload_preset', 'tetalovers');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudURL, { method: 'POST', body: formData });
    if (!resp.ok) {
      throw await resp.json();
    }
    return await resp.json();
    // const respCloud = await resp.json();
    // return respCloud;
  } catch (error) {
    console.log(error);
  }
};

// export const listenToBannersFromFirestore = () => {
//   return db.collection('banners');
// };

// export const listenToBannerFromFirestore = (bannerId) => {
//   return db.collection('banners').doc(bannerId);
// };

// export const addBannerToFirestore = (banner) => {
//   return db.collection('banners').add({
//     ...banner,
//     hostedBy: 'Diana',
//     hostPhotoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
//     attendees: firebase.firestore.FieldValue.arrayUnion({
//       id: cuid(),
//       displayName: 'Diana',
//       photoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
//     }),
//   });
// };

// export const updateBannerInFirestore = (banner) => {
//   return db.collection('banners').doc(banner.id).update(banner);
// };

// export const deleteBannerInFirestore = (bannerId) => {
//   return db.collection('banners').doc(bannerId).delete();
// };

// export const cancelEventToggle = (banner) => {
//   return db.collection('banners').doc(banner.id).update({
//     isCancelled: !banner.isCancelled,
//   });
// };

// // Categories
// export const listenToCategoriesFromFirestore = () => {
//   return db.collection('categories');
// };

// export const listenToCategoryFromFirestore = (categoryId) => {
//   return db.collection('categories').doc(categoryId);
// };

// export const addCategoryToFirestore = (category) => {
//   return db.collection('categories').add({
//     ...category,
//     dateCreate: 'Diana',
//     hostPhotoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
//     attendees: firebase.firestore.FieldValue.arrayUnion({
//       id: cuid(),
//       displayName: 'Diana',
//       photoURL: 'https://randomuser.me/api/portraits/women/20.jpg',
//     }),
//   });
// };

// export const updateCategoryInFirestore = (category) => {
//   return db.collection('categories').doc(category.id).update(category);
// };

// export const deleteCategoryInFirestore = (categoryId) => {
//   return db.collection('categories').doc(categoryId).delete();
// };

// // Products
// export const listenToProductsFromFirestore = () => {
//   return db.collection('products');
// };

// export const listenToProductsByCatFromFirestore = (categoryId) => {
//   return db.collection('products').where('categoryId', '==', categoryId);
// };

// export const listenToProductFromFirestore = (productId) => {
//   return db.collection('products').doc(productId);
// };

// export const addProductToFirestore = (product) => {
//   return db.collection('products').add({
//     ...product,
//   });
// };

// export const updateProductInFirestore = (product) => {
//   return db.collection('products').doc(product.id).update(product);
// };

// export const deleteProductInFirestore = (productId) => {
//   return db.collection('products').doc(productId).delete();
// };
