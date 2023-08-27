import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

//image styling
const imageStyle = {
    width: "50%",
    height: "auto",
    borderRadius: "90%",
    border: "2px solid green",
    boxShadow: "0 0 10px black",
    margin: "20px",
};

const aboutMeStyle = {
    padding: "25px",
    boxShadow: "0 0 10px green",
    margin: "20px",
};

function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <Container className="d-flex p-4">
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <Image
                            src="../src/assets/images/profile.jpg"
                            alt="profile"
                            style={imageStyle}
                        />
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <Row>
                            <p style={aboutMeStyle}>
                                My name is Michael Tranquillo and I&apos;m a
                                full stack web developer. Currently, I work as a
                                massage therapist and HR manager, but I&apos;m
                                pursuing web development as my passion. I love
                                plants, anime, and exploring new technologies.
                                As a hobby, I do Brazilian jiu-jitsu and play
                                tennis. I&apos;m motivated by collaborating with
                                a team to solve problems and come up with
                                innovative solutions. I value efficiency and
                                constantly reflecting on my work to improve. My
                                goal is to help others get excited about and
                                find their way into the tech industry. Outside
                                of work, I enjoy learning new things and pushing
                                myself. I&apos;m proud of the projects I&apos;ve
                                created and problems I&apos;ve overcome in my
                                journey to become a developer so far. I want my
                                enthusiasm for coding and creating to come
                                through. I&apos;m always open to being reached
                                out to if you ever want to chat about web
                                development!{" "}
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;
