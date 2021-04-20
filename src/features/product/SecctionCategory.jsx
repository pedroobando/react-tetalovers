import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import SecctionCategoryItem from './SecctionCategoryItem';

const lstCategory = [
  {
    id: '01',
    name: 'Citricos',
    commentary: 'Pina, Naranja, Limon, Mora, etc.',
    imagenURL: 'assets/category-citricos.jpg',
  },
  {
    id: '02',
    name: 'Galletas',
    commentary: 'Cocosette, Oreo, Pie de Limon, etc.',
    imagenURL: 'assets/category-galletas.jpg',
  },
  {
    id: '03',
    name: 'Tropicales',
    commentary: 'Mango, Guanabana, Lechoza, etc.',
    imagenURL: 'assets/category-tropicales.jpg',
  },
  {
    id: '04',
    name: 'Cremosos',
    commentary: 'Mango, Guanabana, Lechoza, etc.',
    imagenURL: 'assets/category-cremoso.jpg',
  },
  {
    id: '05',
    name: '+ 18 anos',
    commentary: 'Mojito, Ron con pasas, Ponche crema, Tiramisu',
    imagenURL: 'assets/category-mas18.jpg',
  },
];

const SecctionCategory = () => {
  return (
    <Container className="mt-5">
      <Card.Group>
        {lstCategory.map((cat, ind) => (
          <SecctionCategoryItem category={cat} key={ind} />
        ))}
      </Card.Group>
    </Container>
  );
};

export default SecctionCategory;
