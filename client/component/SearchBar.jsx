import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      ticker:'',
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlechange(event){
    this.setState({ticker:event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.search(`${this.state.ticker}`, 'daily')
  }

  render(){
    return(
      <div>
      <p>   All tickers must be capitalized</p>
      <form onSubmit={this.handleSubmit}>
        <label>
          Ticker:
          <input type='text' value={this.state.ticker} onChange={this.handlechange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default SearchBar