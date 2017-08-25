class TPLApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			prediction: '',
			probabilityYes: '',
			probabilityNo: ''
		}
	}

  getPrediction(branchName, programType, time) {
  	axios.post("/api/watson", {
        branchName: branchName,
        programType: programType,
        time: time
      })
      .then((response) => {
      	this.setState({
      		prediction: response.data[0],
      		probabilityNo: response.data[1],
      		probabilityYes: response.data[2]
      	});
      })
      .catch(function (error) {
        console.log(error);
      });
  	
  }

  componentDidMount() {
    //this.getPrediction('Agincourt', 'Cultural', '3:30-6 pm');
  }

	render() {
		return (
			<div>
				<TPL_Header />
        <Controls />
			</div>
		);
	}
}

ReactDOM.render(
  <TPLApp />,
  document.getElementById('root')
);
