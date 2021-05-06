import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import { listenToCategoriesFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { useMenuButtonCreate } from '../../../app/hooks/useMenuButtonCreate';
import CategoryItem from './CategoryItem';

const initialState = [];
const CategoryPage = () => {
  const [categories, setCategories] = useState(initialState);

  useMenuButtonCreate({
    createURL: '/admin/createcategory',
    createText: 'Crear Categoria',
    deps: [],
  });

  useFirestoreCollection({
    query: () => listenToCategoriesFromFirestore(),
    data: (loCategories) => setCategories(loCategories),
    deps: [],
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
