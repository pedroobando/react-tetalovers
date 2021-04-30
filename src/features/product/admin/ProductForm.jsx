import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Header, Segment, Button } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { listenToCategories } from '../productActions';
import { useFirestoreDoc } from '../../../app/hooks/useFirestoreDoc';
import {
  listenToCategoryFromFirestore,
  updateCategoryInFirestore,
  addCategoryToFirestore,
} from '../../../app/firestore/firestoreService';

import * as Yup from 'yup';

import MyTextInput from '../../../app/common/form/MyTextInput';

const ProductForm = ({ match, history }) => {
  // global  google
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) =>
    state.category.categories.find((cat) => cat.id == match.params.id)
  );
  const { loading, error } = useSelector((state) => state.async);

  const initialValues = selectedCategory ?? {
    name: '',
    commentary: '',
    imagenURL: '',
    date: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre de la categoria requerido'),
    commentary: Yup.string().required('El comentario de la categoria requerido'),
    imagenURL: Yup.string().required('La ruta de la imagen es requerida'),
  });

  useFirestoreDoc({
    shouldExecute: !!match.params.id,
    query: () => listenToCategoryFromFirestore(match.params.id),
    data: (category) => dispatch(listenToCategories([category])),
    deps: [match.params.id, dispatch],
  });

  if (loading) return <LoadingComponent content="Loading category.." />;
  if (error) return <Redirect to="/error" />;

  return (
    <Container className="pst-5">
      <Segment clearing>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              selectedCategory
                ? await updateCategoryInFirestore(values)
                : await addCategoryToFirestore(values);
              setSubmitting(false);
              history.push('/admin/category');
            } catch (error) {
              toast.error(error.message);
              setSubmitting(false);
            }
          }}>
          {({ isSubmitting, dirty, isValid }) => (
            <Form className="ui form">
              <Header sub color="teal" content="Datos de la Categoria" />
              <MyTextInput name="name" placeholder="Nombre de la categoria" />
              <MyTextInput name="commentary" placeholder="Comentario sobre la categoria" />
              <MyTextInput name="imagenURL" placeholder="Ruta de la imagen o del Banner" />
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
                to="/admin/category"
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
