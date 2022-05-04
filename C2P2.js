class Parent extends React.Component{
    state = {
        text: "",
    };
    render(){
        return (
            <div>
                <h1>Car {this.state.text}</h1>
                <h2> I am Parent</h2>
                <Child getDataFromChild={this.getDataFromChild.bind(this)} />
            </div>
        );
    }
    //chocolate to get data
    getDataFromChild(ChildData) {
        console.log("data in Parent:", ChildData);
        this.setState({
            text: ChildData,
        });
    }
}
class Child extends React.Component{
    render(){
        console.log("props in child",this.props);
        let data = "Hey data from Child";
        return(
            <div>
                <h2>Audi</h2>
                <button onClick={() =>{
                    this.props.getDatafromChild(data);
                }}>
                send the data to parent
                </button>
            </div>
        );
    }
}
ReactDOM.render(<parent/>,document.getElementById("container"))