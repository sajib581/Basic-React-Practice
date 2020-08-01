import React ,{Component} from "react"

class Controller extends Component{
    constructor(props){
        super(props)

        this.state={
            start : true ,
            pause : true,
            lap : false ,
            reset : false
        }
    }
    getController(){
        
    }

    render(){
        return(
            <h1>Hello</h1>
        )
    }
}

export default Controller