import React, { Component } from "react";
import Model from "./Model";

class Models extends Component {
  constructor() {
    super();
    this.state = {
      datas: [
        {
          id: 1,
          name: "Adiyogi",
          price: 160,
          currency: "RS",
          image: "images/book1.jpg"
        },
        {
          id: 2,
          name: "Inner Engineering",
          price: 166,
          currency: "RS",
          image: "images/book2.jpg"
        }
      ]
    };
  }

  render() {
    const { datas } = this.state;
    return (
      <div>
        {datas.map(data => (
          <Model key={data.id} data={data} />
        ))}
      </div>
    );
  }
}

export default Models;
