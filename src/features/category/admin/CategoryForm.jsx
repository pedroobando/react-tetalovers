import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Header, Segment, Button, Checkbox } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';

// import { listenToCategories } from '../categoryActions';
import { useFirestoreDoc } from '../../../app/hooks/useFirestoreDoc';
import {
  listenToCategoryFromFirestore,
  updateCategoryInFirestore,
  addCategoryToFirestore,
} from '../../../app/firestore/firestoreService';

import * as Yup from 'yup';

import MyTextInput from '../../../app/common/form/MyTextInput';
import MyCheckInput from '../../../app/common/form/MyCheckInput';
import MyFileInput from '../../../app/common/form/MyFileInput';

import {
  removeToCloudinary,
  uploadToCloudinary,
} from '../../../app/cloudinary/cloudinaryService';

const initialValues = {
  name: '',
  commentary: '',
  imagenURL: '',
  date: '',
  imagenFile: { id: '', name: '', url: '' },
  isActive: true,
};

const CategoryForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const [fileUpload, setFileUpload] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(initialValues);
  const { loading, error } = useSelector((state) => state.async);

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre de la categoria requerido'),
    commentary: Yup.string().required('El comentario de la categoria requerido'),
    // imagenURL: Yup.string().required('La ruta de la imagen es requerida'),
    // isActive: Yup.boolean().required('Reqide'),
  });

  useFirestoreDoc({
    shouldExecute: !!match.params.id,
    query: () => listenToCategoryFromFirestore(match.params.id),
    data: (category) =>
      setSelectedCategory({ imagenFile: { id: '', name: '', url: '' }, ...category }),
    deps: [match.params.id, dispatch],
  });

  const handleFileUpload = (file) => {
    setFileUpload(file);
  };

  const cloudFileUpdate = async (values) => {
    if (selectedCategory.id && fileUpload) {
      const { id } = initialValues.imagenFile;
      if (id.toString().length >= 2) {
        await removeToCloudinary(id);
      }
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

  if (loading) return <LoadingComponent content="Loading category.." />;
  if (error) return <Redirect to="/error" />;

  return (
    <Container className="pst-5">
      <Segment clearing>
        <Formik
          initialValues={selectedCategory}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              values.imagenFile = await cloudFileUpdate(values.imagenFile);
              selectedCategory.id
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
              <MyCheckInput name="isActive" label="Categoria activa" />
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

export default CategoryForm;
