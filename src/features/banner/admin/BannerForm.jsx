import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Confirm, Header, Segment, Button } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useFirestoreDoc } from '../../../app/hooks/useFirestoreDoc';
import {
  addBannerToFirestore,
  updateBannerInFirestore,
  listenToBannerFromFirestore,
} from '../../../app/firestore/firestoreService';

import * as Yup from 'yup';

import MyTextInput from '../../../app/common/form/MyTextInput';

const initialValues = {
  name: '',
  imagenURL: '',
  linkURL: '',
  date: '',
};

const BannerForm = ({ match, history }) => {
  // global  google
  const dispatch = useDispatch();
  const [selectedBanner, setSelectedBanner] = useState(initialValues);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const { loading, error } = useSelector((state) => state.async);

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    imagenURL: Yup.string().required('La ruta de la imagen es requerida'),
  });

  useFirestoreDoc({
    shouldExecute: !!match.params.id,
    query: () => listenToBannerFromFirestore(match.params.id),
    data: (banner) => setSelectedBanner(banner),
    deps: [match.params.id, dispatch],
  });

  if (loading) return <LoadingComponent content="Loading banner.." />;
  if (error) return <Redirect to="/error" />;

  return (
    <Container className="pst-5">
      <Segment clearing>
        <Formik
          initialValues={selectedBanner}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              selectedBanner.id
                ? await updateBannerInFirestore(values)
                : await addBannerToFirestore(values);
              setSubmitting(false);
              history.push('/admin/banner');
            } catch (error) {
              toast.error(error.message);
              setSubmitting(false);
            }
          }}>
          {({ isSubmitting, dirty, isValid }) => (
            <Form className="ui form">
              <Header sub color="teal" content="Datos del Banner" />
              <MyTextInput name="name" placeholder="Banner titulo" />
              <MyTextInput name="linkURL" placeholder="Hypervinculo, al presionar." />
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
                to="/admin/banner"
                type="button"
                floated="right"
                content="Cancel"
              />
            </Form>
          )}
        </Formik>
        <Confirm
          open={confirmOpen}
          content={
            selectedBanner?.isCancelled
              ? 'This will reactivate the event - are you sure?'
              : 'This will cancel the event - are you sure?'
          }
          onCancel={() => setConfirmOpen(false)}
          onConfirm={() => handleCancelToggle(selectedBanner)}
        />
      </Segment>
    </Container>
  );
};

export default BannerForm;
