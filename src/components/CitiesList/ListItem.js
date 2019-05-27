import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HOCConnect from '../../hoc/HOCConnect';
import {REMOVE_CITY} from '../../constants';
import PropTypes from "prop-types";
const listItem = (props) => {
    let main = '';
    let weather = '';
    for (var prop in props.main) {main+=prop+" - "+props.main[prop]+", "}
    for (var w in props.weather[0]) {weather+=w+" - "+props.weather[0][w]+", "}

    function removeElement() {
        props.dispatch({type:REMOVE_CITY,id:props.id});
    }

    return (
        <Row className="justify-content-md-center align-items-center">
            <Col md="1" xs="12" >{props.name}</Col>
            <Col md="3" xs="12">Main: {main.slice(0,main.length-2)}</Col>
            <Col md="3" xs="12">Weather: {weather.slice(0,weather.length-2)}</Col>
            <Col md="1" xs="12"><Button size="lg" onClick={removeElement}>Remove</Button></Col>
        </Row>
    );
}

listItem.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
    ownProps: PropTypes.object,
};

export default HOCConnect(listItem);