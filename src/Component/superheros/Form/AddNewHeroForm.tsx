import React from "react";
import { useFormik } from "formik";
import { object, number, string, ObjectSchema } from "yup";
import TextField from "@mui/material/TextField";
import { useAddNewSuperHero } from "../../../Hooks/superHeroQuery";

interface hero {
  name: string;
  alterEgo: string;
}

const AddNewHeroForm = () => {
  const { mutate: AddNewSuperHero } = useAddNewSuperHero();

  const validationSchema: ObjectSchema<hero> = object({
    name: string().required("required"),
    alterEgo: string().required("required"),
  });

  const formik = useFormik({
    initialValues: { name: "", alterEgo: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      AddNewSuperHero(values);
      resetFormik();
    },
  });

  const resetFormik = () => {
    formik.setFieldValue("name", "");
    formik.setFieldValue("alterEgo", "");
    //formik.handleReset();
    formik.resetForm();
  };

  return (
    <div className="grid grid-cols-5 gap-1 m-5 ">
      <TextField
        required
        className="lg:col-span-2 sm:col-span-5"
        id="name"
        label="Hero name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        required
        className="lg:col-span-2 sm:col-span-5"
        id="alterEgo"
        label="Hero alterEgo"
        name="alterEgo"
        value={formik.values.alterEgo}
        onChange={formik.handleChange}
        error={formik.touched.alterEgo && Boolean(formik.errors.alterEgo)}
        helperText={formik.touched.alterEgo && formik.errors.alterEgo}
      />
      <button
        className="col-span-1 bg-slate-200 max-w-[120px] max-h-[55px] rounded-lg hover:bg-slate-400 ease-in duration-150 hover:rounded-2xl"
        onClick={() => formik.handleSubmit()}
      >
        Add hero
      </button>
    </div>
  );
};

export default AddNewHeroForm;
