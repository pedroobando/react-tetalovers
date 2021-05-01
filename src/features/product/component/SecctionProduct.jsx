import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { listenToProductsFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { listenToProducts } from '../productActions';

import SecctionProductItem from './SecctionProductItem';

const SecctionProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useFirestoreCollection({
    query: () => listenToProductsFromFirestore(),
    data: (products) => dispatch(listenToProducts(products)),
    deps: [dispatch],
  });

  return (
    <Grid as="section" className="my-10">
      {products.map((prod, ind) => (
        <SecctionProductItem product={prod} key={ind} />
      ))}
    </Grid>
  );
};

export default SecctionProduct;
