
import DeletedOutlined from '@material-ui/icons/DeleteOutlined'
import Paper from '@material-ui/core/Paper';
import React, { memo } from 'react';
import Select from '@material-ui/core/Select';
import TodoList from './TodoList';
import TodoItems from './TodoItems';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles';

const goalsWidth = '200px'

const styles = theme => ({
  root: {
    display: 'flex',
        float: 'left',
        justifyContent: 'center',
        width: `calc(100% - ${goalsWidth})`,
        height: '100vh',
  }
})

class Goals extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
    this.inputElement =React.createRef()
  }
  handleInput = e => {
    console.log('Over here!')
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  render() {
    return (
      <div className="App">
        <TodoList 
          addItem={this.addItem} 
          textFieldElement={this.props.inputElement} 
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
         />
         <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default Goals;
