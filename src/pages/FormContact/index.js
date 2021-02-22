import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,  Button, Row, Col} from 'react-bootstrap';
import { FormInputText, FormInputDate, FormInputMail, FormInputPhone } from '../../components/index';

const FormContact = () => {
  const onSubmit = (event) => {
   alert("Datos enviado con éxito");
   event.preventDefault();

  };
    return (      
        <Container className="p-5 bg-light" >
        <h1>Formulario</h1>
        <hr></hr>
        <form onSubmit={onSubmit}>
          <FormInputText 
            id = "nameInput"
            label = "Nombre completo:"
            msg = "Escriba sus nombres y apellidos"
            maxLength = "60"
          />
          <FormInputMail 
            id = "mailInput"
            label = "Correo electrónico:"
            msg = "Ej. nombre_correo@gmail.com"
          />
          <Row>
            <Col>
              <FormInputDate 
              id = "dateInput"
              label = "Fecha de nacimiento:"
              msg = "Ej. 31/12/1980"
            />
            </Col>
            <Col>
              <FormInputPhone 
              id="phoneInput"
              label = "Teléfono:"
              msg = "Ej. 8888-8888"/> 
            </Col>
          </Row>
                              
          <Button type="submit" variant="success" size="lg"  block>Enviar</Button>
        </form>        
        </Container>      
    );
  }
  
  export default FormContact;