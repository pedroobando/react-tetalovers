import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import SecctionCategoryItem from './SecctionCategoryItem';

import { listenToCategoriesFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { listenToCategories } from '../categoryActions';

import './styleSecctionCategory.scss';

const SecctionCategory = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useFirestoreCollection({
    query: () => listenToCategoriesFromFirestore(),
    data: (categories) => dispatch(listenToCategories(categories)),
    deps: [dispatch],
  });

  //   <Grid as="section" className="my-2 category">
  //   {categories.map((cat, ind) => (
  //     <SecctionCategoryItem category={cat} key={ind} />
  //   ))}
  // </Grid>

  return (
    <section className="my-4 categories">
      {categories.map((cat, ind) => (
        <SecctionCategoryItem category={cat} key={ind} />
      ))}
    </section>
  );
};

export default SecctionCategory;
