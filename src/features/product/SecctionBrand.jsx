import React from 'react';
import { Container } from 'semantic-ui-react';
const lstBrand = [
  {
    bandId: '01',
    name: 'Citricos',
    commentary: 'Pina, Naranja, Limon, Mora, etc.',
    imagenURL: 'assets/category-citricos.jpg',
  },
  {
    bandId: '02',
    name: 'Galletas',
    commentary: 'Cocosette, Oreo, Pie de Limon, etc.',
    imagenURL: 'assets/category-galletas.jpg',
  },
  {
    bandId: '03',
    name: 'Tropicales',
    commentary: 'Mango, Guanabana, Lechoza, etc.',
    imagenURL: 'assets/category-tropicales.jpg',
  },
  {
    bandId: '04',
    name: 'Cremosos',
    commentary: 'Mango, Guanabana, Lechoza, etc.',
    imagenURL: 'assets/category-cremoso.jpg',
  },
  {
    bandId: '05',
    name: '+ 18 anos',
    commentary: 'Mojito, Ron con pasas, Ponche crema, Tiramisu',
    imagenURL: 'assets/category-mas18.jpg',
  },
];
const SecctionCategoryBrand = () => {
  return <Container className="mt-5"></Container>;
};

export default SecctionCategoryBrand;
