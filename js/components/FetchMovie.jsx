import React from 'react';
import DisplayMovie from './DisplayMovie.jsx';
const url = 'http://localhost:3000/movies';
export default class FetchMovie extends React.Component{



  constructor (props){
    super(props);
    this.state={
      data: [],
      index: 0,
      datas: [],
      length: 0
    }
  };

  componentDidMount=()=>{
    // console.log('mounted');
    this.FetchMovies();
    this.FetchLength();
  };

  FetchLength=()=>{
    return fetch(url).then(r=>r.json()).then (datas=>{
      this.setState({
        datas: datas,
        length: datas.length
      })
    })
  }

  FetchMovies =()=> {
    // console.log(url);
    return fetch(url).then(r=>{
      if(r.ok)
      return r.json();
      else
      throw new Error ('Errors')
    }).then (data=>{
      // console.log('movie data', data);
      // console.log('state w konstruktorze', this.state.index);
      this.setState({
        data: data[this.state.index]
      })
    }).catch(err => {
      console.log(err);
    })
  };

  handleAccept=()=>{
    let index=this.state.index;
    index=index.toString().slice();
    let counter = parseInt(index);
    counter++;
    const vote = {
      "vote": "accept"
    };
    this.setState({
      index: counter
    });
    this.FetchMovies();
    return fetch(url +'/'+ this.state.data.id,{
      method: 'PUT',
      body: JSON.stringify(vote),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>{
      return res;
    });
    // console.log('updated state', this.state.index);
  };

  handleReject=()=>{
    let index=this.state.index;
    index=index.toString().slice();
    let counter = parseInt(index);
    counter++;
    const vote = {
      "vote": "reject"
    };
    this.setState({
      index: counter
    });
    this.FetchMovies();
    return fetch(url +'/'+ this.state.data.id,{
      method: 'PUT',
      body: JSON.stringify(vote),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res=>{
      return res;
    });
    // console.log('updated state', this.state.index);
  }



  renderMyMovie=()=>{
    console.log('thisStateData', this.state.data);
    if(this.state.index>=this.state.length) {
      return <h2>Baza pusta!!!!</h2>
    }else {
    return <DisplayMovie key={this.state.data.id} data={this.state.data} handleAccept={this.handleAccept} handleReject={this.handleReject}/>
    };
    }


  render(){
    console.log('to jest this',this); //this odnosi sie do komponentu
    return(
      <div>
        {this.renderMyMovie()}
      </div>

    )
  }
}
