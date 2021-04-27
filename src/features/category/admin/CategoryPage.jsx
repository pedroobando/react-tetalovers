import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Item } from 'semantic-ui-react';
import { listenToCategoriesFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { listenToCategories } from '../categoryActions';
import CategoryItem from './CategoryItem';
// import BannerItem from './BannerItem';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useFirestoreCollection({
    query: () => listenToCategoriesFromFirestore(),
    data: (categories) => dispatch(listenToCategories(categories)),
    deps: [dispatch],
  });

  return (
    <Container className="pst-5">
      {categories.map((cat, idx) => (
        <CategoryItem category={cat} key={idx} />
      ))}
    </Container>
  );
};

export default CategoryPage;
