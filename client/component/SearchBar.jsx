import React from 'react'
import styles from './styles/SearchBar.css'

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
      <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={this.handleSubmit}>
          <input className={styles.searchBar} placeholder="Search" type='text' value={this.state.ticker} onChange={this.handlechange}
          />
      </form>
      </div>
    )
  }
}

export default SearchBar