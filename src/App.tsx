import React from 'react';

import { CssBaseline } from '@material-ui/core';

import News from 'components/News'

const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

export interface IList {
  title: string,
  url: string,
  author: string,
  num_comments: number,
  points: number,
  objectID: number,
}

export interface IState {
  keyword: string
  list: IList[]
}

class App extends React.Component<{}, IState> {

  constructor(props = {}) {
    super(props)

    this.state = {
      keyword: DEFAULT_QUERY,
      list: []
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.setSearchTopStories = this.setSearchTopStories.bind(this)
  }

  handleSearch(event) {
    const { keyword } = this.state
    this.setState({ keyword: event.target.value });

    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${keyword}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error)
  }

  // isSearched = (searchTerm) => (item) => {
  //   return item.title.toLowerCase().includes(searchTerm.toLowerCase())
  // }

  setSearchTopStories(result) {
    console.log(result.hits)
    let stories: IList[] = []
    result.hits.forEach(item => {
      const obj = {
        title: item.title,
        url: item.url,
        author: item.author,
        num_comments: item.num_comments,
        points: item.points,
        objectID: item.objectID,
      }
      stories.push(obj)
    })
    this.setState({ list: stories });
  }

  componentDidMount() {
    const { keyword } = this.state

    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${keyword}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error)
  }

  render() {
    const { list, keyword } = this.state

    return (
      <div className='App'>
        <CssBaseline />
        <News
          keyword={keyword}
          list={list}
          handleSearch={this.handleSearch}
        />
      </div>
    )
  }
}

export default App;
