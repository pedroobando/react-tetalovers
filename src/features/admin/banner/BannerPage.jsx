import React from 'react';
import { useSelector } from 'react-redux';
import { Icon, Menu, Table } from 'semantic-ui-react';
import BannerItem from './BannerItem';

const lstBanners = [
  {
    promotionId: '01',
    name: 'Tetas de promosiones',
    imagenURL: 'assets/home-sliderdesktop.webp',
    linkURL: '/product/teta2',
  },
  {
    promotionId: '02',
    name: 'Ubicanos',
    imagenURL: 'assets/home-sliderdesktop1.webp',
    linkURL: '',
  },
  {
    promotionId: '03',
    name: 'Tetas de promosiones',
    imagenURL: 'assets/home-sliderdesktop2.webp',
    linkURL: '',
  },
  {
    promotionId: '04',
    name: 'Ubicanos',
    imagenURL: 'assets/home-sliderdesktop3.webp',
    linkURL: '',
  },
  {
    promotionId: '05',
    name: 'Ubicanos',
    imagenURL: 'assets/home-sliderdesktop4.webp',
    linkURL: '',
  },
];

const BannerPage = () => {
  // const { categories, products } = useSelector((state) => state.product);

  return (
    <Table
      className="mt-10"
      celled
      style={{
        fontSize: '1.4em',
      }}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Link Url</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {lstBanners.map((bann, idx) => (
          <BannerItem
            banner={bann}
            // category={{
            //   ...bann,
            //   totalCount: products.filter((prd) => prd.category === cat.categoryId).length,
            // }}
            key={idx}
          />
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default BannerPage;
