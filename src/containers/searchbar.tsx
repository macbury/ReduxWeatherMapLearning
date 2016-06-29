import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";

interface SearchBarState {
  term: string;
}

interface SearchBarProps {
  fetchWeather?: (term : string) => void
}

/**
* Displays search bar with input and button.
*/
class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

  constructor(props: any) {
    super(props);
    this.state = { term: '' };
  }

  private onInputChange(e : any) {
    this.setState({ term: e.target.value });
  }

  private onFormSubmit(e : Event) : boolean {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
    return false;
  }

  public render() {
    let termPresent : boolean = this.state.term.length > 0;
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input
          value={this.state.term} onChange={this.onInputChange.bind(this)}
          />
        <button disabled={!termPresent}>Search</button>
      </form>
    );
  }
}

function mapActions(dispatch : any) {
  return bindActionCreators({
    fetchWeather
  }, dispatch);
}
export default connect(null, mapActions)(SearchBar);
