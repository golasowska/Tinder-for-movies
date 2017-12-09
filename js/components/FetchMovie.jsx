import React from 'react';
import DisplayMovie from './DisplayMovie.jsx';
const url = 'http://localhost:3000/movies';
export default class FetchMovie extends React.Component{



  constructor (props){
    super(props);
    this.state={
      data: [],
      index: 0,
      length: 0
    }
  };

  componentDidMount=()=>{
    console.log('mounted');
    this.FetchMovies();
    this.FetchLength();
  };

  FetchLength=()=>{
    return fetch(url).then(r=>r.json()).then (datas=>{
      this.setState({
        datas: datas,
        length: datas.length
      })
      console.log('length', this.state.length );
    })
  }

  FetchMovies =()=> {
    console.log(url);
    return fetch(url).then(r=>r.json()).then (data=>{
      console.log('movie data', data);
      console.log('state w konstruktorze', this.state.index);
      this.setState({
        data: data[this.state.index]
      })
    })

  };

  handleAccept=()=>{
    let index=this.state.index;
    index=index.toString().slice();
    let counter = parseInt(index);
    counter++;
    this.setState({
      index: counter
    });
    this.FetchMovies();
    console.log('updated state', this.state.index);
  };

  handleReject=()=>{
    let index=this.state.index;
    index=index.toString().slice();
    let counter = parseInt(index);
    counter++;
    this.setState({
      index: counter
    });
    this.FetchMovies();
    console.log('updated state', this.state.index);
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
