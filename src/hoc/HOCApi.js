import React from 'react';

const APPID = "2282aed8e9d9d8ae9d9b10f920af0435";
function componentApi(Component, apiUrl) {

    class ComponentApi extends React.Component {

        get = (callBack,params,fetchInit) =>
            fetch(apiUrl+"?"+params+"&appid="+APPID)
                .then(response => response.json())
                .then(data => {callBack(data)});

        render() {
            return <Component {...this.props} fetchData={this.get}/>
        }
    }
    return ComponentApi;
}



export default componentApi;