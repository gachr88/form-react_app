import { useState} from 'react';
import  {Form, InputGroup} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";



const FormInputDate = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    
    return (
    <Form.Group controlId={props.id}>
        <Form.Label>{props.label}</Form.Label>
        <InputGroup>
                <DatePicker
                  className="form-control"
                  dateFormat={!props.format ? "MM/dd/yyyy": props.format}
                  autoComplete="off"
                  placeholderText={props.msg}
                  name={props.id}
                  showMonthDropdown
                  showYearDropdown
                  todayButton="Hoy"
                  selected={startDate} 
                  onChange={date => setStartDate(date)}                         
                />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <Form.Text id="passwordHelpBlock" muted>
                Ej. Mes/Día/Año
              </Form.Text>                                             
    </Form.Group>
    );
  }
  
  export default FormInputDate;