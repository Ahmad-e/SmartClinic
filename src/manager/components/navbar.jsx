import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
// import {modeActions} from "../store";
import { FilePdfOutlined, ReconciliationOutlined, VideoCameraAddOutlined , IssuesCloseOutlined ,ExperimentOutlined} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

function JustifiedExample( props ) {
    const iconStyle = {
        padding:"0px 10px",
        fontSize:"25px"
    }
    const mode = useSelector((state) => state.mode);
    const { t } = useTranslation();
    return (
        <Nav bg={mode} data-bs-theme={mode} justify variant="tabs" defaultActiveKey="/home" onSelect={(e)=>props.onChange(e)}>
        <Nav.Item style={{ padding:"0px" }}>
            <Nav.Link  eventKey={1}>{t("diagnostic")} <ReconciliationOutlined style={ iconStyle}  /></Nav.Link>
        </Nav.Item>

        <Nav.Item style={{ padding:"0px" }} >
            <Nav.Link eventKey={2}>{t("treatments")} <ExperimentOutlined style={ iconStyle}  /> </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ padding:"0px" }} >
            <Nav.Link eventKey={3}>{t("animation")} <VideoCameraAddOutlined  style={ iconStyle}  /> </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item style={{ padding:"0px" }}>
            <Nav.Link eventKey={4}>{t("documents")} <FilePdfOutlined style={ iconStyle} /> </Nav.Link>
        </Nav.Item> */}
        <Nav.Item style={{ padding:"0px" }}>
            <Nav.Link eventKey={5}>{t("overview")} <IssuesCloseOutlined style={ iconStyle}  /> </Nav.Link>
        </Nav.Item>
        </Nav>
    );
}

export default JustifiedExample;