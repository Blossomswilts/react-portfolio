import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { FaEnvelope } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import Row from "react-bootstrap/Row";
import * as Yup from "yup";
import "../styles/contact.css";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Please enter a message"),
    subject: Yup.string().required("Please enter a subject"),
});

function Contact() {
    return (
        <div>
            <h1>Get In Touch!</h1>
            <Row>
                <Col xs={12} md={6}>
                    <h3>Let&apos;s connect</h3>
                    <p>
                        Please fill out the form within this section to contact
                        me. Or email/text message me!
                    </p>
                    <p>
                        <FaEnvelope /> Email: michael.r.tranquillo@gmail.com{" "}
                    </p>
                    <p>
                        <FaMobile /> Phone: 603-479-5933
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={() => {
                            // submit form
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Control
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Name"
                                    className={
                                        errors.name && touched.name
                                            ? "error"
                                            : null
                                    }
                                />
                                {errors.name && touched.name && (
                                    <div className="error">{errors.name}</div>
                                )}

                                <Form.Control
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Email"
                                    className={
                                        errors.email && touched.email
                                            ? "error"
                                            : null
                                    }
                                />
                                {errors.email && touched.email && (
                                    <div className="error">{errors.email}</div>
                                )}

                                <Form.Control
                                    name="subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Subject"
                                    className={
                                        errors.subject && touched.subject
                                            ? "error"
                                            : null
                                    }
                                />
                                {errors.subject && touched.subject && (
                                    <div className="error">
                                        {errors.subject}
                                    </div>
                                )}

                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Message"
                                    className={
                                        errors.message && touched.message
                                            ? "error"
                                            : null
                                    }
                                />
                                {errors.message && touched.message && (
                                    <div className="error">
                                        {errors.message}
                                    </div>
                                )}

                                <Button type="submit">Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;
