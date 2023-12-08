import React, {Component} from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import MaleNames from './maleNames.json';
import FemaleNames from './femaleNames.json';


class FullRandomShep extends Component {
    genders =['Male', 'Female'];
    chClasses = ['Soldier', 'Engineer', 'Adept', 'Infiltrator', 'Sentinel', 'Vanguard'];
    backgrounds = ['Spacer', 'Colonist', 'Earthborn'];
    serviceHistories = ['Sole Survivor', 'War Hero', 'Ruthless'];
    morals = ['Paragon', 'Renegade', 'Paragade (aka: Neutral/bit of both)'];
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            gender: '',
            chClass: '',
            background: '',
            serviceHistory: '',
            morality: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            firstName: '',
            gender: '',
            chClass: this.chClasses.at(this.randomIndexInList(0, this.chClasses.length-1)),
            background: this.backgrounds.at(this.randomIndexInList(0, this.backgrounds.length-1)),
            serviceHistory: this.serviceHistories.at(this.randomIndexInList(0, this.serviceHistories.length-1)),
            morality: this.morals.at(this.randomIndexInList(0, this.morals.length-1))
        });
    }

    generateRandomShep = () => {
        this.setState({
            chClass: this.chClasses.at(this.randomIndexInList(0, this.chClasses.length-1)),
            background: this.backgrounds.at(this.randomIndexInList(0, this.backgrounds.length-1)),
            serviceHistory: this.serviceHistories.at(this.randomIndexInList(0, this.serviceHistories.length-1)),
            morality: this.morals.at(this.randomIndexInList(0, this.morals.length-1))
        });
        return ('Name: ' + this.state.firstName + ' Shepard\nGender: ' + this.state.gender + '\nClass: ' + this.state.chClass + '\nBackground: ' 
        + this.state.background + '\nService History: ' + this.state.serviceHistory + '\nMorality: ' + this.state.morality);
    }

    randomGender = () => {
        var randGender = this.genders.at(this.randomIndexInList(0, this.genders.length-1));
        this.setState({gender: randGender});
        return randGender;
    }

    randomName = (gender) => {
        var randName = '';
        var names = '';
        if(gender === 'Male'){
            names = MaleNames["MaleNames"];
            randName = names.at(this.randomIndexInList(0, 300))["name"];
        } else if(gender === 'Female'){
            names = FemaleNames["FemaleNames"];
            randName = names.at(this.randomIndexInList(0, 300))["name"];
        }
        this.setState({firstName: randName.charAt(0) + randName.substring(1, randName.length).toLocaleLowerCase()});
    }

    randomizeShep = () => {
        var gender = this.randomGender();
        this.randomName(gender);
    }

    handleChange = (event, key) => {
        this.setState({
            [key]: event.target.value,
        });
    }

    handleSubmit = (e) => {
        var output = this.generateRandomShep();
        alert(output);
        e.preventDefault();
    }

    randomIndexInList = (min, max) => { 
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }; 

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.firstName} onChange={event => this.handleChange(event, 'firstName')} />
                </label><br></br>
                <div onChange={event => this.handleChange(event, 'gender')}>
                    Gender:
                    <input name="genderSelect" type="radio" value={'Male'} /> Male
                    <input name="genderSelect" type="radio"  value={'Female'} /> Female
                </div>
                <input type="submit" value="Generate" onSubmit={this.handleSubmit}/>
                <button onClick={this.randomizeShep}>Surprise Me</button>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </form>
        )
    }
}

export default FullRandomShep;