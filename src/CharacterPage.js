import React from "react";

class CharacterPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            firstName: props.firstName,
            gender: props.gender,
            chClass: props.chClass,
            background: props.background,
            serviceHistory: props.serviceHistory,
            morality: props.morality
        };
        this.state = {
            firstName: '',
            gender: '',
            chClass: '',
            background: '',
            serviceHistory: '',
            morality: ''
        };
    }

    componentDidMount() {
        this.setState({
            firstName: this.props.firstName,
            gender: this.props.gender,
            chClass: this.props.chClass,
            background: this.props.background,
            serviceHistory: this.props.serviceHistory,
            morality: this.props.morality
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.query !== this.props.query) {
            this.setState({
                firstName: '',
                gender: '',
                chClass: '',
                background: '',
                serviceHistory: '',
                morality: ''
            });
        }
    }

    render() {
        return (
             <div className="CharacterPageContainer">
                <ul>
                    <li>Name: {this.state.firstName} Shepard</li>
                    <li>Gender: {this.state.gender}</li>
                    <li>Class: {this.state.chClass}</li>
                    <li>Background: {this.state.background}</li>
                    <li>Service History: {this.state.serviceHistory}</li>
                    <li>Morality: {this.state.morality}</li>
                </ul>
             </div>
        );
    }
}

export default CharacterPage;