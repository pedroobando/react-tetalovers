import React, { useState } from 'react';
import SecctionCategoryItem from './SecctionCategoryItem';

import { listenToCategoriesFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';

import './styleSecctionCategory.scss';

const initialState = [];

const SecctionCategory = () => {
  const [categories, setCategories] = useState(initialState);

  useFirestoreCollection({
    query: () => listenToCategoriesFromFirestore(),
    data: (loCategories) => setCategories(loCategories),
    deps: [],
  });

  return (
    <section className="my-4 categories">
      {categories.map((cat, ind) => (
        <SecctionCategoryItem category={cat} key={ind} />
      ))}
    </section>
  );
};

export default SecctionCategory;
