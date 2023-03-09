import React from 'react'

function Time(){
    let curr={hrs:0,min:0};
    let res=[];
    while(curr.hrs<24){
        res.concat([{
            hrs:curr.hrshrs,
            min:curr.min,
        }])
        curr.min+=30;
        if (curr.min===60){
            curr.hrs+=1;
            curr.min=0;
        }
    }
    return res
}

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            time:Time(),
            hi:0,
            weekdays:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
            }   
        };
        
    
    componentDidUpdate(prevProps,prevState){
        if (prevState.list!== this.props.dataFromParent){
            this.setState((curr)=>{
                return {
                    list:this.props.dataFromParent,
                }
            })
            console.log(this.state.list);
        }
        
    }
    
    render(){
        return (
            <table >
                <thead>
                    <tr>
                        <th>Time</th>
                        {this.state.weekdays.map((date)=>{
                            return(
                                <th >{date}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                {this.state.list.map((task)=>{
                    return (
                        <tr key={task.id}>
                            <td >{task.task}</td>
                            <td >{task.date}</td>
                            <td>{task.startTime}</td>
                            <td>{task.endTime}</td>
                        </tr>
                        
                    )
                })}
                </tbody>
               
            </table>
        )
    }
}

export default Table