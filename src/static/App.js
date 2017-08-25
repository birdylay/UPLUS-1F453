let cards = [
  {'score': '0.9', 'desc': 'Awesome', 'branch': 'Agincourt', 'program': 'STEM', 'time': '6pm'},
  {'score': '0.1', 'desc': 'Awful', 'branch': 'Albion', 'program': 'Culture and Arts', 'time': '2pm'},
  {'score': '0.8', 'desc': 'Super', 'branch': 'Downsview', 'program': 'Music', 'time': '4pm'},
  {'score': '0.2', 'desc': 'Terrible', 'branch': 'Centennial', 'program': 'Business', 'time': '6pm'},
  {'score': '0.7', 'desc': 'Great', 'branch': 'Maryvale', 'program': 'STEM', 'time': '4pm'},
  {'score': '0.3', 'desc': 'Bad', 'branch': 'Steeles', 'program': 'Culture and Arts', 'time': '2pm'},
  {'score': '0.3', 'desc': 'Bad', 'branch': 'Steeles', 'program': 'Culture and Arts', 'time': '2pm'},
  {'score': '0.3', 'desc': 'Bad', 'branch': 'Steeles', 'program': 'Culture and Arts', 'time': '2pm'},
  {'score': '0.3', 'desc': 'Bad', 'branch': 'Steeles', 'program': 'Culture and Arts', 'time': '2pm'},
  {'score': '0.3', 'desc': 'Bad', 'branch': 'Steeles', 'program': 'Culture and Arts', 'time': '2pm'},
  {'score': '0.3', 'desc': 'Bad', 'branch': 'Steeles', 'program': 'Culture and Arts', 'time': '2pm'},
  {'score': '0.3', 'desc': 'Bad', 'branch': 'Steeles', 'program': 'Culture and Arts', 'time': '2pm'},
  {'score': '0.3', 'desc': 'Bad', 'branch': 'Steeles', 'program': 'Culture and Arts', 'time': '2pm'},
  {'score': '0.3', 'desc': 'Bad', 'branch': 'Steeles', 'program': 'Culture and Arts', 'time': '2pm'}

];

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <TPL_Header />
        <Controls />
        <CardList cards={cards} />

      </div>
    );
  }
}
