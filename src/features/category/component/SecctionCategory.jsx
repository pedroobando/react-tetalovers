import React, { useState } from 'react';
import SecctionCategoryItem from './SecctionCategoryItem';

import { listenToCategoriesFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';

import './styleSecctionCategory.scss';
import { Header } from 'semantic-ui-react';

const initialState = [];

const SecctionCategory = () => {
  const [categories, setCategories] = useState(initialState);

  useFirestoreCollection({
    query: () => listenToCategoriesFromFirestore(),
    data: (loCategories) => setCategories(loCategories),
    deps: [],
  });

  return (
    <div className="my-10">
      <Header as="h2" textAlign="left" content="Nuestras categorias" color="black" />
      <section className="categories">
        {categories.map((cat, ind) => (
          <SecctionCategoryItem category={cat} key={ind} />
        ))}
      </section>
    </div>
  );
};

export default SecctionCategory;
