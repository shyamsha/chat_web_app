import React, { useCallback, useState } from "react";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../../components/hook-form/FormProvider";
import { RHFTextField, RHFUploadAvatar } from "../../components/hook-form";
import { Button, Stack } from "@mui/material";
import { faker } from "@faker-js/faker";
// import { useDispatch, useSelector } from "react-redux";
// import { UpdateUserProfile } from "../../../redux/slices/app";
// import { AWS_S3_REGION, S3_BUCKET_NAME } from "../../../config";

const ProfileForm = () => {
  // const dispatch = useDispatch();
  const [file, setFile] = useState();
  // const { user } = useSelector((state) => state.app);

  const ProfileSchema = Yup.object().shape({
    firstName: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
    avatar: Yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    firstName: faker.name.firstName(),
    about: faker.lorem.sentence(),
    avatar: faker.image.avatar(),
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const { setValue, handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      //   Send API request
      console.log("DATA", data);
      // dispatch(
      //   UpdateUserProfile({
      //     firstName: data?.firstName,
      //     about: data?.about,
      //     avatar: file,
      //   })
      // );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      setFile(file);

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("avatar", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <RHFUploadAvatar name="avatar" maxSize={3145728} onDrop={handleDrop} />

        <RHFTextField
          helperText={"This name is visible to your contacts"}
          name="firstName"
          label="First Name"
        />
        <RHFTextField multiline rows={4} name="about" label="About" />

        <Stack direction={"row"} justifyContent="end">
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            // loading={isSubmitSuccessful || isSubmitting}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
