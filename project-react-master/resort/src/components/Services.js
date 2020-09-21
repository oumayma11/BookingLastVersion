import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaHome } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
       
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
       
      },
      {
        icon: <FaHome />,
        title: "Room Services(24h)",
        
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}