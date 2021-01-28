import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      ticker:'',
    };
    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(event){
    this.setState({ticker:event.target.value})
  }

  render(){
    return(
      <form>
        <label>
          Ticker:
          <input type='text' value={this.state.ticker} onChange={this.handlechange}/>
        </label>
      </form>
    )
  }
}

export default SearchBar