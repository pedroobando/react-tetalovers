import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Confirm, Header, Segment, Button } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { listenToBanners } from '../bannerActions';
import { useFirestoreDoc } from '../../../app/hooks/useFirestoreDoc';
import {
  addBannerToFirestore,
  updateBannerInFirestore,
  listenToBannerFromFirestore,
} from '../../../app/firestore/firestoreService';

import * as Yup from 'yup';

import MyTextInput from '../../../app/common/form/MyTextInput';

const BannerForm = ({ match, history }) => {
  // global  google
  const dispatch = useDispatch();
  const [loadingCancel, setLoadingCancel] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const selectedBanner = useSelector((state) =>
    state.banner.banners.find((ban) => ban.id == match.params.id)
  );
  const { loading, error } = useSelector((state) => state.async);

  const initialValues = selectedBanner ?? {
    name: '',
    imagenURL: '',
    linkURL: '',
    date: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    imagenURL: Yup.string().required('La ruta de la imagen es requerida'),
  });

  // const handleCancelToggle = async (event) => {
  //   setConfirmOpen(false);
  //   setLoadingCancel(true);
  //   try {
  //     await cancelEventToggle(event);
  //     setLoadingCancel(false);
  //   } catch (error) {
  //     setLoadingCancel(true);
  //     toast.error(error.message);
  //   }
  // };

  useFirestoreDoc({
    shouldExecute: !!match.params.id,
    query: () => listenToBannerFromFirestore(match.params.id),
    data: (banner) => dispatch(listenToBanners([banner])),
    deps: [match.params.id, dispatch],
  });

  if (loading) return <LoadingComponent content="Loading banner.." />;
  if (error) return <Redirect to="/error" />;

  return (
    <Container className="pst-5">
      <Segment clearing>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              selectedBanner
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
              {/* {selectedBanner && (
              <Button
                loading={loadingCancel}
                type="button"
                floated="left"
                color={selectedBanner.isCancelled ? 'green' : 'red'}
                content={selectedBanner.isCancelled ? 'Reactivate event' : 'Cancel Event'}
                onClick={() => setConfirmOpen(true)}
              />
            )} */}
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
                to="/events"
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
