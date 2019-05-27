import React,{Component} from 'react';
import './App.css';
import HOCConnect from './hoc/HOCConnect';
import CitiesList from './components/CitiesList';
import ymaps from 'ymaps';
import HOCApi from "./hoc/HOCApi";
import {ADD_NEW_CITY,WEATHER_API_URL} from './constants';
import PropTypes from "prop-types";

class App extends Component {

    componentDidMount(){
        ymaps.load().then(maps => {
            let location = maps.geolocation.get();
            location.then(
                (result) => {
                    let position = result.geoObjects.position;
                    let coords = 'lat='+position[0]+'&lon='+position[1];
                    this.props.fetchData((data)=>{this.props.dispatch({type:ADD_NEW_CITY,city:data});},coords)
                },
                (err)=> {
                    console.log('Ошибка: ' + err)
                }
            );
        }).catch(error => console.log('Failed to load Yandex Maps', error));
    }

    render(){
        return (
            <div className="App">
                <CitiesList/>
            </div>
        );
    }

}

App.propTypes = {
    state: PropTypes.object,
    fetchData: PropTypes.func,
    dispatch: PropTypes.func,
    ownProps: PropTypes.object,
};

export default HOCApi(HOCConnect(App),WEATHER_API_URL);
