import React, { Component } from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      linkName:",url:"
    }

    
    /*
            TODO - set initial state for link name and URL 
        */
  this.handleChange=this.handleChange.bind(this);

  this.onFormChange=this.onFormChange.bind(this);

  }

  handleChange=(event)=>{
    /*
            TODO - Logic for changing state based on form changes
        */
    if(event.target.id === "link")
       this.setState({linkname:event.target.value});
    else
       this.setState({url:event.target.value});
  }

  onFormChange=event=> {
    // to prevent page reload on form submit
    event.preventDefault();
    let newFavLink={linkname:this.state.linkName,url:this.state.url};
    this.setState({linkName:",url:"});
    this.props.addNew(newFavLink);

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  render(){
    return (
      <form>
        <label for="link">Link Name:</label>
        <input type="text" id="link" onChange={(event)=>this.handleChange(event)}/>
        <label for="url">URL: </label>
        <input type="text" id="url" onChange={(event)=>this.handleChange(event)}/>
        <button type="submit" onClick={()=>this.onFormSubmit()}>Submit</button>
        
      </form>
    )
  }
}

export default Form
