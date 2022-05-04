class Condition extends React.Component{
    state = {
        adminName: "Rupali",
        userName: "RB",
        isAdmin: true,
    };
    render() {
        let { adminName,userName,isAdmin } = this.state;
        let renderData = null;
        if(isAdmin) {
            renderData = (
                <div>
                    <h1>Admin Name: {adminName</h1>
                    <h1>Home</h1>
                    <h1>Login</h1>
                    <h2>Add Product</h2>
                </div>
        );
        }
        else{
            renderData = (
                <div>
                    <h1>User Name: {userName}</h1>
                    <h1>Home</h1>
                    <h1>Login</h1>
                </div>
            );
        }
        return(
            <div>
                {renderData}
                <button onClick={() =>{
                    this.changeView();
                }}>
                {isAdmin ? "see user View" : "see Admin View"}
                </button>
            </div>
        );
    }
    changeView(){
        if(this.state.isAdmin){
            this.setState({
                isAdmin: false,
            });
        }else{
            this.setState({
                isAdmin: true,
            });
        }
    }
 }
    ReactDOM.render(<parent/>,document.getElementById("container"))