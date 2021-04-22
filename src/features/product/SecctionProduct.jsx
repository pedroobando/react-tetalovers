import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import SecctionProductItem from './SecctionProductItem';

const lstProduct = [
  {
    productId: '01',
    name: 'Citricos',
    category: {},
    commentary: 'Pina, Naranja, Limon, Mora, etc.',
    imagenURL: 'assets/category-citricos.jpg',
    dateCreation: new Date('2001-03-20'),
    active: true,
  },
  {
    productId: '02',
    name: 'Galletas',
    commentary: 'Cocosette, Oreo, Pie de Limon, etc.',
    imagenURL: 'assets/category-galletas.jpg',
  },
  {
    productId: '03',
    name: 'Tropicales',
    commentary: 'Mango, Guanabana, Lechoza, etc.',
    imagenURL: 'assets/category-tropicales.jpg',
  },
  {
    productId: '04',
    name: 'Cremosos',
    commentary: 'Mango, Guanabana, Lechoza, etc.',
    imagenURL: 'assets/category-cremoso.jpg',
  },
  {
    productId: '05',
    name: '+ 18 anos',
    commentary: 'Mojito, Ron con pasas, Ponche crema, Tiramisu',
    imagenURL: 'assets/category-mas18.jpg',
  },
];

const SecctionProduct = () => {
  return (
    <Container className="my-5">
      <Grid>
        {lstProduct.map((cat, ind) => (
          <SecctionProductItem category={cat} key={ind} />
        ))}
      </Grid>
    </Container>
  );
};

export default SecctionProduct;
