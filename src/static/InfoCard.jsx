class InfoCard extends React.Component {
  render() {
    return (
      <div className="card-deck">
        <div className="card attribute">
          <div className="card-block">
            <div className="card-title">{this.props.title}</div>
            <div className="card-description">
              <div className="card-heading"></div>
              <p className="card-text">{this.props.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}