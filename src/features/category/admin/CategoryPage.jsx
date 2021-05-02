import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { listenToCategoriesFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { useMenuButtonCreate } from '../../../app/hooks/useMenuButtonCreate';
import { listenToCategories } from '../categoryActions';
import CategoryItem from './CategoryItem';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useMenuButtonCreate({
    createURL: '/admin/createcategory',
    createText: 'Crear Categoria',
    deps: [dispatch],
  });

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
