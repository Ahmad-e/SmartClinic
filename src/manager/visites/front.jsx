import * as React from 'react';
import Front from './front'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from './table';
import AddPatients from './add';
import { useParams } from "react-router"

const OverView=(props)=> {
    const [open, setOpen] = React.useState(false);
    const [dataToChange, setDataToChange] = React.useState({});
    
    const { id } = useParams();
    console.log(id);

    return(

        <Container>
            <Row>
                <Col lg={12} xs={12}>
                    {
                        id==="0" ? ("") :(<AddPatients onAdd={(data)=>props.onAdd(data)} />)
                    }

                </Col>
            </Row>
            <Row>
                <Col lg={12} xs={12}>
                    <Table visits={props.visits}  data={props.data} onOpenDialog={(e)=>setDataToChange(e)} />
                </Col>
            </Row>
            
        </Container>
    )
}

export default OverView