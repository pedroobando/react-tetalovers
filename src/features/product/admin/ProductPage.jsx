import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { listenToProductsFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { menuActivo } from '../../nav/menuReducer';
import { listenToProducts } from '../productActions';
import ProductItem from './ProductItem';

import './styleProductPage.scss';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  dispatch(
    menuActivo({
      createURL: '/admin/createProduct',
      createText: 'Crear Producto',
    })
  );

  useFirestoreCollection({
    query: () => listenToProductsFromFirestore(),
    data: (products) => dispatch(listenToProducts(products)),
    deps: [dispatch],
  });

  return (
    <Container className="pst-5">
      {products.map((prd, idx) => (
        <ProductItem product={prd} key={idx} />
      ))}
    </Container>
  );
};

export default ProductPage;
