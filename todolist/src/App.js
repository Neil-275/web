import './App.css';
import React from 'react';

function List(props){
  return (
    <div>
      <ul>
      {
        props.list.map((things)=>(
          <li key={things.id}
          >{things.task}</li>
        ))
      }
      </ul>
    </div>
  )
}

function AddList(props){
  return (
    <div>
      <input  onChange={props.handleChange}
              value={props.new}
              placeholder="Add new task"
      ></input>
      <button onClick={props.addTask}>
        Add
      </button>
    </div>
  )
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[{task:"Do homework",id:0}],
      neww:"",
      cnt:0,
    }
    this.handleChange=this.handleChange.bind(this)
    this.addTask=this.addTask.bind(this)
  }
  addTask(){
    if (this.state.neww!==""){
      this.setState((curr)=>{
        return{
          list: curr.list.concat([
            {
              task: this.state.neww,
              id: curr.cnt+1,
            },
          
          ]),
          neww:"",
          cnt: curr.cnt+1,
        }
          
      })
    }
  }
  handleChange(e){
    let tmp=e.target.value
    this.setState({
      neww:tmp,
    })
  }
  render(){
    return (
      <div>
          <List
          list={this.state.list}
          />
          <AddList
          handleChange={this.handleChange}
          new={this.state.neww}
          addTask={this.addTask}/>
      </div>
    )
    
  }
}

export default App;
