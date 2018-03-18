import React, {Component} from 'react'
import { withState, mapProps, compose } from 'recompose'

const starWarsChars = [
    { name:'Luke', side:'light' },
    { name:'Darth Vader', side:'dark' },
    { name:'Obi-wan Kenobi', side:'light'},
    { name:'Palpatine', side:'dark'},
 ]
 
 const DisplayList = ({list, otherSide, stateHandler}) => (
    <div>
        <button onClick={() => stateHandler(otherSide)}>Switch</button>
        {list.map( c=> <div key={c.name}>{c.name}</div>)}
    </div>
 )

 const ToggleableFilteredList = compose(
     withState('stateValue', 'stateHandler', 'dark'),
     mapProps(({list, stateValue, stateHandler}) => ({
        list: list.filter(c => c.side == stateValue),
        otherSide: stateValue == 'dark' ? 'light' : 'dark',
        stateHandler
     }))
 )(DisplayList)

 const StarWarApp = () => (
     <ToggleableFilteredList list={starWarsChars}/>
 )

 export default StarWarApp;


 /*const FiltertedList = ({list, side}) => {
    let filtered = list.filter(c => c.side === side)
    return <DisplayList list={filtered}/> 
}*/
/*const withFilterProps = BaseComponent => ({list, side}) => {
    const transformedProps = list.filter(c => c.side == side)
    return <BaseComponent list={transformedProps}/>
}
const FiltertedList = withFilterProps(DisplayList)
*/
/*
const withTransformProps = transformFunc => BaseComponent => (baseProps) => {
    const transformedProps = transformFunc(baseProps)
    return <BaseComponent {...transformedProps}/>
}


const withSimpleState = defaultState => BaseComponent => {
    return class withSimpleState extends Component {
        state = {value: defaultState}
        updateState = value => this.setState({value})
        render(){
            return <BaseComponent {...this.props} 
                stateValue={this.state.value} stateHandler={this.updateState}/>
        }
    }
}

const compose = (...hocs) => BaseComponent => 
    hocs.reduceRight((acc, hoc) => hoc(acc), BaseComponent)


const ToggleableFilteredList = compose(
    withSimpleState('dark'),
    withTransformProps(({list, stateValue, stateHandler})=>({
        list: list.filter(c => c.side == stateValue),
        otherSide: stateValue == 'dark' ? 'light' : 'dark',
        stateHandler
    }))
)(DisplayList)
*/