import * as React from 'react';
import Front from './front'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from './table';
import AddPatients from './addPatients';
import EditPatients from './editPatients';

const OverView=(props)=> {
    const [open, setOpen] = React.useState(false);
    const [dataToChange, setDataToChange] = React.useState({});
    
    return(

        <Container>
            <Row>
                <Col lg={12} xs={12}>
                    <AddPatients onAdd={(data)=>props.onAdd(data)} />
                </Col>
            </Row>
            <Row>
                <Col lg={12} xs={12}>
                <Table  data={props.data} onOpenDialog={(e)=>setDataToChange(e)} />
                </Col>
                <Col lg={12} xs={12}>
                    <EditPatients  data={dataToChange} onChange={(e)=>props.onChange(e)} />
                </Col>
            </Row>
            
        </Container>
    )
}

export default OverView