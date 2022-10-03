import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';

function Login() {
    const cardStyles = {
        width:500,
        position:"relative"
    }
  return (
    <Container style={{padding: 40, width:500}}>
        <Card style={cardStyles}>
        <Card.Header>Login</Card.Header>
            <Card.Body>
                <Card.Title>Acceso</Card.Title>
                <Card.Text>
                <Form>
                    <Form.Group className="mb-3" controlId="usuario">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Usuario" />
                     </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Acceder
                    </Button>
                </Form>
                </Card.Text>
            </Card.Body>
        </Card>
        
    </Container>

  );
}

export default Login;