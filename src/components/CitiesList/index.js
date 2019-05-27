import React from 'react';
import HOCConnect from '../../hoc/HOCConnect';
import SearchField from './SeacrhField';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import ListItem from './ListItem';
import PropTypes from "prop-types";

const CitiesList = (props) => {

    let list = props.state.citiesList.map((element,index)=>
        {
            return <ListGroup.Item  key={index+"_"+element.name}>{<ListItem {...element}/>}</ListGroup.Item>
        }
    );

    return (
        <Container fluid>
            <SearchField/>
            <ListGroup>
                {list}
            </ListGroup>
        </Container>
    )
}

CitiesList.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
    ownProps: PropTypes.object,
};

/*class CitiesList extends Component {
    render() {

        let list = this.props.state.citiesList.map((element,index)=>
            {
                return <ListGroup.Item  key={index+"_"+element.name}>{<ListItem {...element}/>}</ListGroup.Item>
            }
        );

        return (
            <Container fluid>
                <SearchField/>
                <ListGroup>
                    {list}
                </ListGroup>
            </Container>
        );
    }
}
*/
export default HOCConnect(CitiesList);