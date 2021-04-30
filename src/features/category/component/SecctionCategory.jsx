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
  // const { loading } = useSelector((state) => state.async);

  useFirestoreCollection({
    query: () => listenToCategoriesFromFirestore(),
    data: (categories) => dispatch(listenToCategories(categories)),
    deps: [dispatch],
  });

  return (
    <Grid as="section" className="my-2">
      {categories.map((cat, ind) => (
        <SecctionCategoryItem category={cat} key={ind} />
      ))}
    </Grid>
  );
};

export default SecctionCategory;
