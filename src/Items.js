import React, { Component } from "react";
import Item from "./Item";
import Image from "./assets/picture.webp";

class Items extends Component {
  state = {
    displayLinks: true,
    linksText: "up",
    likes: 134
  };
  onUpClickHandler = () => {
    let text = null;
    this.state.linksText === "up" ? (text = "down") : (text = "up");
    let display = !this.state.displayLinks;
    this.setState({
      displayLinks: display,
      linksText: text
    });
  };

  onLikesHandler = () => {
    let count = this.state.likes;
    count++;
    this.setState({
      likes: count
    });
  };

  render() {
    return (
      <div>
        <Item
          itemName="Brynlee V-neck Waffle Sweater"
          price="39.99"
          sale="0.4749"
          freeShipping={true}
          image={Image}
          onUpClickHandler={this.onUpClickHandler}
          showShareOptions={this.state.displayLinks}
          likes={this.state.likes}
          likesHandler={this.onLikesHandler}
          linksText={this.state.linksText}
        />
      </div>
    );
  }
}

export default Items;
