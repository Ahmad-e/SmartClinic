import * as React from 'react';
import Table from '../components/sortedTable';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateUser from './createUser'
import { Collapse, Divider } from 'antd';

const OverView=()=> {

    
    return(
        <Container>
            <Row className='justify-center'>
                <Col lg={11} md={12} className='pb-4'>
                    <Collapse
                        size="large"
                        items={[{ key: '1', label: 'Add new users', children: <CreateUser /> }]}
                        />
                </Col>

                <Col lg={11} md={12} >
                    <Table/>
                </Col>
            </Row>
            
        </Container>
    )
}

export default OverView