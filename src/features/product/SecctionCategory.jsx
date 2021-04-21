import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import SecctionCategoryItem from './SecctionCategoryItem';

const lstCategory = [
  {
    categoryId: '01',
    name: 'Citricos',
    commentary: 'Pina, Naranja, Limon, Mora, etc.',
    imagenURL: 'assets/category-citricos.jpg',
  },
  {
    categoryId: '02',
    name: 'Galletas',
    commentary: 'Cocosette, Oreo, Pie de Limon, etc.',
    imagenURL: 'assets/category-galletas.jpg',
  },
  {
    categoryId: '03',
    name: 'Tropicales',
    commentary: 'Mango, Guanabana, Lechoza, etc.',
    imagenURL: 'assets/category-tropicales.jpg',
  },
  {
    categoryId: '04',
    name: 'Cremosos',
    commentary: 'Mango, Guanabana, Lechoza, etc.',
    imagenURL: 'assets/category-cremoso.jpg',
  },
  {
    categoryId: '05',
    name: '+ 18 anos',
    commentary: 'Mojito, Ron con pasas, Ponche crema, Tiramisu',
    imagenURL: 'assets/category-mas18.jpg',
  },
];

const SecctionCategory = () => {
  return (
    <Container className="my-5">
      <Grid>
        {/* <Card.Group> */}
        {lstCategory.map((cat, ind) => (
          <SecctionCategoryItem category={cat} key={ind} />
        ))}
      </Grid>
      {/* </Card.Group> */}
    </Container>
  );
};

export default SecctionCategory;
