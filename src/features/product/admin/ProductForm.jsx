import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Header, Segment, Button } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { listenToProducts } from '../productActions';
import { useFirestoreDoc } from '../../../app/hooks/useFirestoreDoc';
import {
  listenToProductFromFirestore,
  updateProductInFirestore,
  addProductToFirestore,
  listenToCategoriesFromFirestore,
} from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';

import * as Yup from 'yup';

import MyTextInput from '../../../app/common/form/MyTextInput';
import MyFileInput from '../../../app/common/form/MyFileInput';
import MySelectInput from '../../../app/common/form/MySelectInput';

import {
  removeToCloudinary,
  uploadToCloudinary,
} from '../../../app/cloudinary/cloudinaryService';

const ProductForm = ({ match, history }) => {
  // global  google

  const [dataCategories, setDataCategories] = useState([]);
  const dispatch = useDispatch();
  const [fileUpload, setFileUpload] = useState(null);
  const selectedProduct = useSelector((state) =>
    state.product.products.find((prd) => prd.id == match.params.id)
  );

  useFirestoreCollection({
    query: () => listenToCategoriesFromFirestore(),
    data: (categories) =>
      setDataCategories(
        categories.map((cat) => ({ key: cat.id, value: cat.id, text: cat.name }))
      ),
    deps: [dispatch],
  });

  // const categoryData = listenToCategoriesFromFirestore();
  const { loading, error } = useSelector((state) => state.async);

  const initialValues = selectedProduct ?? {
    categoryId: '',
    description: '',
    name: '',
    isActive: true,
    isNew: true,
    isPromotion: true,
    price: 0,
    imagenFile: { name: '', id: '', url: '' },
  };

  const validationSchema = Yup.object({
    categoryId: Yup.string().required('La cetegoria a la cual pertenece el producto'),
    name: Yup.string().required('El nombre de producto es requerido'),
    description: Yup.string().required(
      'Una breve descripcion del producto, ayudara a conocer un poca mas es este.'
    ),
    price: Yup.number().min(-1, 'El precio del producto no debe ser menor a cero'),
  });

  useFirestoreDoc({
    shouldExecute: !!match.params.id,
    query: () => listenToProductFromFirestore(match.params.id),
    data: (product) => dispatch(listenToProducts([product])),
    deps: [match.params.id, dispatch],
  });

  const handleFileUpload = (file) => {
    setFileUpload(file);
  };

  const cloudFileUpdate = async (values) => {
    if (selectedProduct && fileUpload) {
      const { id } = initialValues.imagenFile;
      await removeToCloudinary(id);
    }

    if (fileUpload) {
      const cloudfile = await uploadToCloudinary(fileUpload);
      return {
        ...values,
        url: cloudfile.secure_url,
        id: cloudfile.public_id,
      };
    }
    return values;
  };

  if (loading) return <LoadingComponent content="Loading productos.." />;
  if (error) return <Redirect to="/error" />;

  return (
    <Container className="pst-5">
      <Segment clearing>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              values.imagenFile = await cloudFileUpdate(values.imagenFile);
              selectedProduct
                ? await updateProductInFirestore(values)
                : await addProductToFirestore(values);
              setSubmitting(false);
              history.push('/admin/product');
            } catch (error) {
              toast.error(error.message);
              setSubmitting(false);
            }
          }}>
          {({ isSubmitting, dirty, isValid }) => (
            <Form className="ui form">
              <Header sub color="teal" content="Datos del Producto" />
              <MySelectInput
                name="categoryId"
                placeholder="Categoria del producto"
                options={dataCategories}
              />
              <MyTextInput name="categoryId" placeholder="Categoria del producto" />
              <MyTextInput name="name" placeholder="Nombre del producto" />
              <MyTextInput name="description" placeholder="Descripcion o comentario" />
              <MyTextInput name="price" type="number" placeholder="Precio" />
              <MyFileInput
                name="imagenFile"
                onfileupload={(e) => handleFileUpload(e)}
                placeholder="Indique la imagen a subir"
              />

              <Button
                loading={isSubmitting}
                disabled={!isValid || !dirty || isSubmitting}
                type="submit"
                floated="right"
                positive
                content="Submit"
              />
              <Button
                disabled={isSubmitting}
                as={Link}
                to="/admin/product"
                type="button"
                floated="right"
                content="Cancel"
              />
            </Form>
          )}
        </Formik>
      </Segment>
    </Container>
  );
};

export default ProductForm;
