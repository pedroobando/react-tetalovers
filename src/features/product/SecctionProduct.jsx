import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import SecctionProductItem from './SecctionProductItem';

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
  return (
    <Container className="my-20">
      <Grid>
        {lstProduct.map(
          (prod, ind) => prod.promotion && <SecctionProductItem product={prod} key={ind} />
        )}
      </Grid>
    </Container>
  );
};

export default SecctionProduct;
