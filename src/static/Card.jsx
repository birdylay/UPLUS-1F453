class Card extends React.Component {
  render() {
    return (
        <li className="flex__item">

          <h1 className="flex__item__score">{this.props.card.score}</h1>
          <h2 className="flex__item__score">{this.props.card.desc}</h2>

          <div className="flex__item__bottom">
              <h2 className="flex__item__text">{this.props.card.branch}</h2>
              <h3 className="flex__item__text">{this.props.card.program}</h3>
              <p className="flex__item__text">{this.props.card.time}</p>
          </div>

        </li>
    );
  }
}