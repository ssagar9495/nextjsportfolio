import CommonHeader from "@/components/commonHeader";
import CommonTitle from "@/components/commonTitle";
import styles from "./styles.module.scss";
import { TextField, Button, Grid } from "@mui/material";
import * as Yup from "yup";
import { Form, useFormik, FormikProvider } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FORM_FIELD = [
  { label: "Name", identifer: "name" },
  { label: "Email", identifer: "email" },
  { label: "Message", identifer: "message", isMutline: true },
];

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export const questionEditSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});
const Contact = () => {
  const handleFormSubmit = (payload, { resetForm }) => {
    toast.success(`${payload.name} your form Submitted Successfully`);
    resetForm();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: questionEditSchema,
    onSubmit: handleFormSubmit,
  });
  const {
    errors,
    touched,
    values,
    handleSubmit,
    getFieldProps,
    setFieldValue,
    resetForm,
  } = formik;

  return (
    <main className={styles.mainContainer}>
      <div ata-aos="fade-right">
        <CommonHeader heading="CONTACT" />
        <CommonTitle title="Get in Touch" />

        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2} className="py-16">
              {FORM_FIELD.map((obj, i) => {
                return (
                  <Grid item xs={12} sm={12} className="mt-4">
                    <TextField
                      fullWidth
                      id={obj.identifer}
                      label={obj.label}
                      variant="outlined"
                      name={obj.identifer}
                      multiline={obj?.isMutline}
                      rows={5}
                      maxRows={4}
                      value={values?.[obj.identifer]}
                      sx={{
                        "& .css-1o5upn4-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "white",
                          },
                        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                          borderColor: "white",
                        },
                        "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
                          {
                            color: "white",
                          },
                        "& .css-a5xs0d-MuiFormLabel-root-MuiInputLabel-root": {
                          color: "white",
                        },
                        "& .css-8scuxa-MuiFormLabel-root-MuiInputLabel-root": {
                          color: "white",
                        },
                        "& .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input":
                          {
                            color: "white",
                          },
                      }}
                      onChange={(e) =>
                        setFieldValue([obj?.identifer], e.target.value)
                      }
                      error={Boolean(
                        touched?.[obj.identifer] && errors?.[obj.identifer]
                      )}
                      helperText={
                        touched?.[obj.identifer] && errors?.[obj.identifer] ? (
                          touched?.[obj.identifer] && errors?.[obj.identifer]
                        ) : (
                          <span style={{ visibility: "hidden" }}>hiddne</span>
                        )
                      }
                    />
                  </Grid>
                );
              })}
              <Grid item xs={12} sm={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  className="mt-5 hover:border-white"
                  sx={{ borderColor: "white", color: "white" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        </FormikProvider>
      </div>
    </main>
  );
};

export default Contact;
