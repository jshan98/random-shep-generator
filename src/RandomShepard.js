import React, {Component} from "react";
import MaleNames from './maleNames.json';
import FemaleNames from './femaleNames.json';
import CharacterPage from "./CharacterPage";


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
            showAdv: false,
            showResult: false,
            selected: ''
        };
    }

    componentDidMount() {
        this.setState({
            firstName: '',
            gender: this.genders.at(this.randomIndexInList(0, this.genders.length-1)),
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
    }

    randomGender = () => {
        var randGender = this.genders.at(this.randomIndexInList(0, this.genders.length-1));
        this.setState({gender: randGender});
        return randGender;
    }

    randomName = (gender) => {
        this.setState({firstName: ''});
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
        this.generateRandomShep();
        var output = ('Name: ' + this.state.firstName + ' Shepard\nGender: ' + this.state.gender + '\nClass: ' + this.state.chClass + '\nBackground: ' 
        + this.state.background + '\nService History: ' + this.state.serviceHistory + '\nMorality: ' + this.state.morality);
        console.log("Should output: " + output);
        this.setState({showResult: true});
    }

    handleChange = (event, key) => {
        this.setState({
            [key]: event.target.value,
        });
    }

    handleSubmit = (e) => {
        this.generateRandomShep();
        var output = ('Name: ' + this.state.firstName + ' Shepard\nGender: ' + this.state.gender + '\nClass: ' + this.state.chClass + '\nBackground: ' 
        + this.state.background + '\nService History: ' + this.state.serviceHistory + '\nMorality: ' + this.state.morality);
        console.log("Should output: " + output);
        this.setState({showResult: true});
        e.preventDefault();
    }
    handleAdvSubmit = (e) => {
        var output = ('Name: ' + this.state.firstName + ' Shepard\nGender: ' + this.state.gender + '\nClass: ' + this.state.chClass + '\nBackground: ' 
        + this.state.background + '\nService History: ' + this.state.serviceHistory + '\nMorality: ' + this.state.morality);
        console.log("Should output: " + output);
        this.setState({showResult: true});
        e.preventDefault();
    }

    randomIndexInList = (min, max) => { 
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }; 

    clearAllStates = () => {
        this.setState({
            firstName: '',
            gender: '',
            chClass: '',
            background: '',
            serviceHistory: '',
            morality: '',
            showAdv: false,
            showResult: false,
            selected: ''
        });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" defaultValue="" value={this.state.firstName} onChange={event => this.handleChange(event, 'firstName')} />
                </label><br></br>
                <div onChange={event => this.handleChange(event, 'gender')}>
                    Gender:
                    <input name="genderSelect" type="radio" value={'Male'} checked={this.state.selected === 'Male'} onChange={event => this.handleChange(event, 'selected')}/> Male
                    <input name="genderSelect" type="radio"  value={'Female'} checked={this.state.selected === 'Female'} onChange={event => this.handleChange(event, 'selected')}/> Female
                </div>
                <button type="button" onClick={this.handleSubmit}>Generate</button>
                <button type="button" onClick={this.randomizeShep}>Surprise Me</button>
                <button type="button" onClick={() => {this.setState({showAdv: !this.state.showAdv})}}>{ this.state.showAdv? '' : ''} Advanced Options</button>
                {
                    this.state.showAdv? 
                    <div>
                        Class: 
                        <select onChange={event => this.handleChange(event, 'chClass')}>
                            <option></option>
                            <option value={'Soldier'}> {this.chClasses.at(0)} </option>
                            <option value={'Engineer'}> {this.chClasses.at(1)} </option>
                            <option value={'Adept'}> {this.chClasses.at(2)} </option>
                            <option value={'Infiltrator'}> {this.chClasses.at(3)} </option>
                            <option value={'Sentinel'}> {this.chClasses.at(4)} </option>
                            <option value={'Vanguard'}> {this.chClasses.at(5)} </option>
                        </select>
                        Background: 
                        <select onChange={event => this.handleChange(event, 'background')}>
                            <option></option>
                            <option value={'Spacer'}> {this.backgrounds.at(0)} </option>
                            <option value={'Colonist'}> {this.backgrounds.at(1)} </option>
                            <option value={'Earthborn'}> {this.backgrounds.at(2)} </option>
                        </select><br></br>
                        Service History: 
                        <select onChange={event => this.handleChange(event, 'serviceHistory')}>
                            <option></option>
                            <option value={'Sole Survivor'}> {this.serviceHistories.at(0)} </option>
                            <option value={'War Hero'}> {this.serviceHistories.at(1)} </option>
                            <option value={'Ruthless'}> {this.serviceHistories.at(2)} </option>
                        </select>
                        Morality: 
                        <select onChange={event => this.handleChange(event, 'morality')}>
                            <option></option>
                            <option value={'Paragon'}> {this.morals.at(0)} </option>
                            <option value={'Renegade'}> {this.morals.at(1)} </option>
                            <option value={'Paragade (aka: Neutral/bit of both)'}> {this.morals.at(2)} </option>
                        </select><br></br>
                        <button type="button" onClick={this.handleAdvSubmit}>Adv. Generate</button>
                    </div> :null
                }
                {
                    this.state.showResult?
                    <div>
                        <CharacterPage 
                            firstName={this.state.firstName}
                            gender={this.state.gender}
                            chClass={this.state.chClass}
                            background={this.state.background}
                            serviceHistory={this.state.serviceHistory}
                            morality={this.state.morality}
                        ></CharacterPage>
                        <button type="button" onClick={this.clearAllStates}>Reset</button>
                    </div> :null
                }
                
            </form>
        )
    }
}

export default FullRandomShep;