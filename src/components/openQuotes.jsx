import React, { Component } from "react";
import Avatar from "./avatar";

class OpenQuotes extends Component {
  state = {};
  render() {
    const quotes = this.props.quotes;

    return (
      <React.Fragment>
        {quotes.length > 0 ? (
          this.renderPhotos(quotes)
        ) : (
          <img
            className="avatar"
            src="../../images/waiting.svg"
            alt="Aguardando Orçamentos"
          />
        )}
      </React.Fragment>
    );
  }

  renderPhotos = quotes => {
    if (quotes.length > 3) {
      return "3 FOTOS + ICONE EXTRA";
    } else {
      return quotes.map(quote => (
        <Avatar
          imgSrc={quote.avatar}
          imgAlt={quote.name}
          imgTitle={quote.name}
          key={quote.id}
        />
      ));
    }
  };
}

export default OpenQuotes;
