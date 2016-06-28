import * as React from 'react';

interface SearchBarState {
  term: string;
}

/**
* Displays search bar with input and button.
*/
class SearchBar extends React.Component<any, SearchBarState> {

  constructor(props: any) {
    super(props);
    this.state = { term: '' };
  }

  private onInputChange(e : any) {
    this.setState({ term: e.target.value });
  }

  private onFormSubmit(e : Event) : boolean {
    e.preventDefault();
    console.log("Captured", e);
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

export default SearchBar;
