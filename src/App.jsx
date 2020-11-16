import React, { Component } from "react";
import axios from "axios";

import Card from "./component/card";
import HoursDay from "./component/hoursDay";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      city: "",
      input: "",
      isLoading: true,
    };
  }

  async componentDidMount() {
    await this.getData("Gyor");
  }
  getData = async (city) => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=4283501191174fd8b6b124808201511&q=${city}&days=3`
    );
    await this.setState({ weather: response.data });
    console.log(this.state.weather.forecast.forecastday);
    this.setState({ isLoading: false });
  };
  onChange = async (e) => {
    await this.setState({ city: e.currentTarget.value });
    this.getData(this.state.city); // city API
    console.log(this.state.city);
  };

  render() {
    const { weather, isLoading } = this.state;
    if (isLoading) {
      return <div className="App">Loading...</div>;
    }
    return (
      <div className="App">
        <input type="text" onChange={this.onChange} />
        {weather.forecast.forecastday.map((e) => (
          <Card date={e.date} max_t={e.day.maxtemp_c} min_t={e.day.mintemp_c} />
        ))}
        <HoursDay /> {/* egy sorba alá */}
      </div>
    );
  }
}

export default App;
