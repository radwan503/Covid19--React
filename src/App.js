import React from 'react';

//two types to import files from  another page
/*
---first way-- 
import Cards from './components/Card/Cards';
import Chart from './components/Chart/Chart';
import Coutrypicker from './components/Countrypicker/Countrypicker';
*/


//2nd way

import {Cards,Chart,Countrypicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import covidImage from './images/image.png'; 


class App extends React.Component{

  state={
    data:{},
    country:'',
  }

  async componentDidMount (){
    const fetchedData = await fetchData();
    
    this.setState({data:fetchedData});
  }


  handleCountryChange=async(country)=>{

    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country});
  }

  render(){

    const {data,country} = this.state;
    return(
      <div className={styles.container}>
      <img className={styles.imagelogo} src={covidImage} alt="corona image"/>
        <Cards data={data}></Cards>
        <Countrypicker handleCountryChange={this.handleCountryChange}></Countrypicker>
        <Chart data={data} country={country}></Chart>
      </div>
    )
  }
}


export default App;