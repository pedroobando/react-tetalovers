import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import SecctionProductItem from './SecctionProductItem';
import { listenToProductsFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { listenToProducts } from '../productActions';

const lstProduct = [
  {
    productId: '01',
    name: 'Mango',
    categoryId: '01',
    description: 'Pina, Naranja, Limon, Mora, etc.',
    imagenURL: 'assets/category-citricos.jpg',
    dateCreation: new Date('2001-03-20'),
    price: 22.9,
    promotion: true,
    newproduct: false,
    active: true,
  },
  {
    productId: '02',
    name: 'Pi~na',
    categoryId: '01',
    description: 'Pi~na el sabor preferido',
    imagenURL: 'assets/category-citricos.jpg',
    dateCreation: new Date('2001-03-20'),
    price: 1.9,
    promotion: false,
    newproduct: false,
    active: true,
  },
  {
    productId: '03',
    name: 'Ron con pasas',
    categoryId: '05',
    description: 'Pi~na el sabor preferido',
    imagenURL: 'assets/category-citricos.jpg',
    dateCreation: new Date('2001-03-20'),
    price: 1.9,
    promotion: true,
    newproduct: false,
    active: true,
  },
  {
    productId: '04',
    name: 'Arroz con leche',
    categoryId: '02',
    description: 'Pi~na el sabor preferido',
    imagenURL: 'assets/category-citricos.jpg',
    dateCreation: new Date('2001-03-20'),
    price: 1.9,
    promotion: false,
    newproduct: false,
    active: true,
  },
  {
    productId: '05',
    name: 'Galleta Maria',
    categoryId: '02',
    description: 'Galleta maria',
    imagenURL: 'assets/category-citricos.jpg',
    dateCreation: new Date('2001-03-20'),
    price: 1.9,
    promotion: true,
    newproduct: false,
    active: true,
  },
];

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
