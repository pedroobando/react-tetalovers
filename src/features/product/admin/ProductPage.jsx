import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { listenToProductsFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { listenToProducts } from '../productActions';
import { menuActivo, menuDesactivo } from '../../nav/menuReducer';
import ProductItem from './ProductItem';

import './styleProductPage.scss';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(
      menuActivo({
        createURL: '/admin/createProduct',
        createText: 'Crear Producto',
      })
    );
    return () => {
      dispatch(menuDesactivo());
    };
  }, [dispatch]);

  useFirestoreCollection({
    query: () => listenToProductsFromFirestore(),
    data: (products) => dispatch(listenToProducts(products)),
    deps: [dispatch],
  });

  return (
    <Container className="pst-5 product">
      {products.map((prd, idx) => (
        <ProductItem product={prd} key={idx} />
      ))}
    </Container>
  );
};

export default ProductPage;
