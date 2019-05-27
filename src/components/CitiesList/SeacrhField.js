import React, {useRef,useState } from 'react';
import HOCConnect from '../../hoc/HOCConnect';
import HOCApi from "../../hoc/HOCApi";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {ADD_NEW_CITY,WEATHER_API_URL} from '../../constants';

import Alert from 'react-bootstrap/Alert'
import PropTypes from "prop-types";

const SearchField = (props) => {
    const cityName = useRef(null);
    const [state, setState] = useState({errorMessage:''});

    function onAddCity(){
        setState({errorMessage:''});
        props.fetchData(onGetSearchResult,'q='+cityName.current.value)
    }

    function onGetSearchResult(data){
        if(data.cod === 200)props.dispatch({type:ADD_NEW_CITY,city:data});
        else setState({errorMessage:data.message})

    }

    let errorAllert = '';
    if(state.errorMessage!=='')errorAllert=<Alert variant="danger" key="seacrhAlert">{state.errorMessage}</Alert>

    return (
        [
            errorAllert,
            <Row className="justify-content-md-center" key="searchComponent">
                <Col md="3">
                    <InputGroup className="mb-3 mt-3">
                        <InputGroup.Prepend>
                            <Button onClick={onAddCity}>Add City</Button>
                        </InputGroup.Prepend>
                        <FormControl aria-describedby="basic-addon1" ref={cityName} />
                    </InputGroup>
                </Col>
            </Row>
        ]
    )
}
SearchField.propTypes = {
    state: PropTypes.object,
    fetchData: PropTypes.func,
    dispatch: PropTypes.func,
    ownProps: PropTypes.object,
};
/*class SearchField extends Component {

    state = {
        errorMessage:''
    };


    onAddCity(){
        this.setState({errorMessage:''})
        this.props.fetchData(this.onGetSearchResult.bind(this),this.cityName.value)
    }

    onGetSearchResult(data){
        if(data.cod === 200)this.props.dispatch({type:ADD_NEW_CITY,city:data});
        else this.setState({errorMessage:data.message})

    }

    render() {
        let errorAllert = '';
        if(this.state.errorMessage!=='')errorAllert=<Alert variant="danger" key="seacrhAlert">{this.state.errorMessage}</Alert>
        return (
              [
                errorAllert,
                <Row className="justify-content-md-center" key="searchComponent">
                    <Col md="3">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <Button onClick={this.onAddCity.bind(this)}>Add City</Button>
                            </InputGroup.Prepend>
                            <FormControl aria-describedby="basic-addon1" ref={(input)=>{this.cityName = input}} />
                        </InputGroup>
                    </Col>
                </Row>
              ]
        );
    }
}*/

export default HOCApi(HOCConnect(SearchField),WEATHER_API_URL);