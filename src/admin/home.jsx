import * as React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from './components/chart';
import { useSelector } from 'react-redux';
const { RangePicker } = DatePicker;



const App = () => {
    
    const onRangeChange = (dates, dateStrings) => {
        if (dates) {
          console.log('From: ', dates[0], ', to: ', dates[1]);
          console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
        } else {
          console.log('Clear');
        }
      };

    const rangePresets = [
        { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
        { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
        { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
        { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
      ];

    const mode = useSelector((state) => state.mode);
    const  state = {
        options: {
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-1",
            data: [40, 50, 25, 20, 19, 20, 35, 71]
          }
        ]
      };

      const  donatState = {
        options: {
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          },
          series: [44, 55, 13, 33],
          labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
        },
        series:  [44, 55, 13, 33]
        
      };
    return(
        <Container>
            <Row className='justify-center py-3'>
                <Col lg={12} xs={12}>
                    <Space direction="vertical" size={12}>
                        <RangePicker
                        size='large'
                        onChange={onRangeChange}
                        presets={[
                            {
                            label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,
                            value: () => [dayjs(), dayjs().endOf('day')], // 5.8.0+ support function
                            },
                            ...rangePresets,
                        ]}
                        showTime
                        format="YYYY/MM/DD"
                        />
                    </Space>
                </Col>
            </Row>
            <Row  className='justify-center py-3'>
                <Col lg={6} sm={12} >
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        width="100%"
                        height="340"
                    />
                </Col>
                <Col  lg={6} sm={12}>
                    <Chart
                        options={donatState.options}
                        series={donatState.series}
                        type="donut"
                        width="100%"
                        height="340"
                    />
                </Col>
                <Col  lg={12} sm={12}>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type="line"
                        width="100%"
                        height="340"
                    />
                </Col>
                
            </Row>
            
        </Container>
        
        )};
export default App;