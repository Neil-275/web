import './App.css';
import React from 'react';
import Clock from './Clock.js'
import Table from './Table';

function List(props) {
    return (
        <div>
            <ul>
                {
                    props.list.map((things) => (
                        <li key={things.id}>
                            {things.task}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}



function AddList(props) {
    return (
        <div>
          <form>
            <label>New task: </label>
            <input 
              onChange={props.handleChange}
              name="newTask"
              value={props.new}
            />
            <br/>
            <label>Date: </label>
            <input 
              onChange={props.handleChange}
              type="date"
              name="date"
              value={props.date}
            />
            <br/>
            <label>Start time: </label>
            
            <input 
              onChange={props.handleChange}
              type="time"
              name="startTime"
              value={props.startTime}
            />
            <br/>
            <label>End time: </label>
            <input 
              onChange={props.handleChange}
              type="time"
              name="endTime"
              value={props.endTime}
            />
            <br/>
            <button onClick={props.addTask}>
                Add
            </button>
          </form>
            
        </div>
    )
}



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [

            ],
            newTask: "",
            startTime:"",
            endTime: "",
            date:"",
            cnt: 0,
            clock: 0,
        }
        this.handleChange = this.handleChange.bind(this)
        this.addTask = this.addTask.bind(this)
    }
    addTask(e) {
        if (this.state.newTask !== "") {
            this.setState((curr) => {
                return {
                    list: curr.list.concat([
                        {
                            task: this.state.newTask,
                            id: curr.cnt + 1,
                            date: this.state.date,
                            startTime: this.state.startTime,
                            endTime: this.state.endTime,
                        },

                    ]),
                    newTask: "",
                    startTime: "",
                    endTime: "",
                    date:"",
                    cnt: curr.cnt + 1,
                }

            })
        }
        e.preventDefault();
    }
    handleChange(e) {
        
        let tmp = e.target.name
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState({
          [tmp]: e.target.value,
        })
    }
    componentDidMount(prevProps, prevState) {
        setInterval(() => {
            this.setState((curr) => {
                return {
                    clock: curr.clock + 1,
                }
            })
        }, 10000);

    }
    render() {
        return (
            <div>
                <Clock />
                
                <AddList
                    handleChange={this.handleChange}
                    new={this.state.newTask}
                    startTime={this.state.startTime}
                    endTime={this.state.endTime}
                    date={this.state.date}
                    addTask={this.addTask}
                 />
                 {/* <List
                    list={this.state.list}
                /> */}
                <Table dataFromParent={this.state.list}/>
            </div>
            
        )

    }
}

export default App;
