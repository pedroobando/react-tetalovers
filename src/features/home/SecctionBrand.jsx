import React from 'react';

const lstBrand = [
  {
    bandId: '01',
    name: 'cafe',
    imagenURL: 'assets/brand-cafe.png',
  },
  {
    bandId: '02',
    name: 'kelloggs',
    imagenURL: 'assets/brand-kelloggs.png',
  },
  {
    bandId: '03',
    name: 'Coca-Cola',
    imagenURL: 'assets/brand-coca-cola.png',
  },
  {
    bandId: '04',
    name: 'Maria Goya',
    imagenURL: 'assets/brand-maria.png',
  },
  {
    bandId: '05',
    name: 'Nestle',
    imagenURL: 'assets/brand-nestle.png',
  },
  {
    bandId: '06',
    name: 'Galleta Oreo',
    imagenURL: 'assets/brand-oreo.png',
  },
];
const SecctionBrand = () => {
  return (
    <section className="my-10 brands">
      {lstBrand.map((brand, ind) => (
        <div className="brandItem" key={ind}>
          <img src={brand.imagenURL} alt={brand.name} />
        </div>
      ))}
    </section>
  );
};

export default SecctionBrand;
