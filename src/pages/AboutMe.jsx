import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

//image styling
const imageStyle = {
    width: '50%',
    height: 'auto',
    borderRadius: '90%',
    border: '2px solid green',
    boxShadow: '0 0 10px black',
    margin: '20px auto', // Center image horizontally
    display: 'block', // Ensure it's treated as a block element
};

const aboutMeStyle = {
    padding: '25px',
    boxShadow: '4px 4px 18px green',
    margin: '20px auto', // Center text block horizontally
    maxWidth: '600px', // Limit width for better readability on larger screens
};

function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <Container
                className="d-flex flex-column align-items-center p-4"
                style={{ maxHeight: '100%', height: '100%' }}>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} className="text-center">
                        <Image src="/assets/images/profile.jpg" alt="profile" style={imageStyle} />
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center">
                            <p style={aboutMeStyle} className="aboutMe">
                                My name is Michael Tranquillo and I&apos;m a full stack web developer. Currently, I work
                                as a massage therapist and HR manager, but I&apos;m pursuing web development as my
                                passion. I love plants, anime, and exploring new technologies. As a hobby, I do
                                Brazilian jiu-jitsu and play tennis. I&apos;m motivated by collaborating with a team to
                                solve problems and come up with innovative solutions. I value efficiency and constantly
                                reflecting on my work to improve. My goal is to help others get excited about and find
                                their way into the tech industry. Outside of work, I enjoy learning new things and
                                pushing myself. I&apos;m proud of the projects I&apos;ve created and problems I&apos;ve
                                overcome in my journey to become a developer so far. I want my enthusiasm for coding and
                                creating to come through. I&apos;m always open to being reached out to if you ever want
                                to chat about web development!
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;
