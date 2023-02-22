import React, { Component } from 'react';

class Contents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myData: null,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ myData: data }))
      .catch(error => console.log(error))
  }

  dataFilter ()
  {
    const { myDatas } = this.state
    for (let i = 0; i < myDatas.length; i++) {
      const myData = myDatas[i]
      return <li>{myData.userId + myData.id + myData.tittle + myData.body}</li>
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.dataFilter()}
        </ul>
      </div>
    )
  }
}

export default Contents