import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';

const ComponentConnect = (Component) => (props)=>{
    return <Component {...props}/>
}

const mapStateToProps = (state)=> {
    return {state};
}

const mapDispatchToProps = (dispatch, ownProps)=> {
    return {dispatch,ownProps}
}

const HOCConnect = compose(connect(mapStateToProps, mapDispatchToProps),ComponentConnect);

export default HOCConnect;