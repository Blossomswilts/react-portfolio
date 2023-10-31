import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { FaEnvelope, FaMobile } from "react-icons/fa";
import "../styles/contact.css";

function Contact() {
    const form = useRef();
    const [showModal, setShowModal] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_3gl1aa8",
                "template_e79v5yw",
                form.current,
                "bDvzVs02A85JLg-o2"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset(); // Reset the form
                    setShowModal(true); // Show the modal
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h1>Get In Touch!</h1>
            <Row>
                <Col xs={12} md={6} className="connect">
                    <h3>Connect With Me</h3>
                    <p>
                        Please fill out the form within this section to contact
                        me. Or email/text message me!
                    </p>
                    <p>
                        <FaEnvelope /> Email: michael.r.tranquillo@gmail.com
                    </p>
                    <p>
                        <FaMobile /> Phone: 603-479-5933
                    </p>
                </Col>
                <Col xs={12} md={6}>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                    </form>
                </Col>
            </Row>

            {/* Modal for Success Message */}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your message has been sent successfully!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Contact;
