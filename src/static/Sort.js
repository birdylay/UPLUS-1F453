class Sort extends React.Component {
  render() {
    return (
        <div className="sort">

            <label for="selector__sorting">Sort By:</label>
            <span className="selector">
                <select className="selector__sorting" name="options" id="sort">
                    <option value="none">None</option>
                    <option value="season">Seasonality</option>
                    <option value="y2o">Young to Old</option>
                    <option value="o2y">Old to Young</option>
                </select>
            </span>

        </div>
    );
  }
}