class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            branch: 'Agincourt',
            program: 'Cultural',
            time: '9 am-12:30 pm',
            prediction: '',
            probabilityYes: '',
            probabilityNo: '',
            cards: [],
            text: <span>This application intends to utilise historical attendance records to predict the likelihood of success of types of events scheduled at a specific branch and time. < br />< br /> The purpose is to provide Toronto Public Library with further insight in creating informed decisions on program scheduling. <br /><br />The predictor employs IBM Watson Machine Learning service in which the model was trained using attendance records from 2016.</span>,
            title: "Program Scheduling Predictor"
        };
        this.handleChangeBranch = this.handleChangeBranch.bind(this);
        this.handleChangeProgram = this.handleChangeProgram.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getPrediction(branchName, programType, time) {
        axios.post("/api/watson", {
            branchName: branchName,
            programType: programType,
            time: time
        }).then((response) => {
            this.setState({
                prediction: response.data[0],
                probabilityNo: response.data[1],
                probabilityYes: response.data[2]
            });
            if (response.data[0] === 'No') {
                this.setState({
                    cards: [{
                        'score': (response.data[2] * 100).toFixed(1) + '%',
                        'desc': 'Poor',
                        'branch': branchName,
                        'program': programType,
                        'time': time
                    }],
                    title: 'Scheduling Prediction',
                    text: < span > Watson predicts that hosting this type of event at <b>{branchName}</b>&nbsp;from <b>{time}</b>&nbsp;will likely have <b>BELOW</b> average attendance rates and to consider alternative branches,
                    program types, or timings. < br / >< br / > This prediction is based on historical data in which events of this type had below average attendance rates or is a branch that does not cater to these types of events. < br / > < br / > Success Probability: <b>{(response.data[1] * 100).toFixed(1) + '%'}</b> < br / > < br / > Failure Probability: <b>{(response.data[2] * 100).toFixed(1) + '%'}</b> < /span>
                })
            } else {
                this.setState({
                    cards: [{
                        'score': (response.data[1] * 100).toFixed(1) + '%',
                        'desc': 'Great',
                        'branch': branchName,
                        'program': programType,
                        'time': time
                    }],
                    title: 'Scheduling Prediction',
                    text: < span > Watson predicts that hosting this type of event at {
                        branchName
                    }
                    at {
                        time
                    } will likely have <b>ABOVE</b> average attendance rates and would recommend scheduling an event of this type. < br / > < br / > This prediction is based on historical data in which events of this type had above average attendance rates. < br / > < br / > Success Probability: <b>{(response.data[1] * 100).toFixed(1) + '%'}</b> < br / > < br / > Failure Probability: <b>{(response.data[2] * 100).toFixed(1) + '%'}</b> < /span>
                })
            }
        }).catch(function(error) {
            console.log(error);
        });
    }
    handleChangeBranch(event) {
        this.setState({
            branch: event.target.value
        });
    }
    handleChangeProgram(event) {
        this.setState({
            program: event.target.value
        });
    }
    handleChangeTime(event) {
        this.setState({
            time: event.target.value
        });
    }
    handleSubmit(event) {
        this.getPrediction(this.state.branch, this.state.program, this.state.time);
        event.preventDefault();
    }
    render() {
        return ( 
            < div >
            < form className = "selectors"
            onSubmit = {
                this.handleSubmit
            } > < label
            for = "selector__branch" > Branch: < /label> < span className = "selector" > < select className = "selector__branch"
            name = "options"
            id = "selector-branch"
            value = {
                this.state.branch
            }
            onChange = {
                this.handleChangeBranch
            } > < option value = "none" > None < /option> < option value = "Agincourt" > Agincourt < /option> < option value = "Albert Campbell" > Albert Campbell < /option> < option value = "Albion" > Albion < /option> < option value = "Annette Street" > Annette Street < /option> < option value = "Barbara Frum" > Barbara Frum < /option> < option value = "Bloor/Gladstone" > Bloor / Gladstone < /option> < option value = "Brentwood" > Brentwood < /option> < option value = "Cedarbrae" > Cedarbrae < /option> < option value = "Don Mills" > Don Mills < /option> < option value = "Downsview" > Downsview < /option> < option value = "Eatonville" > Eatonville < /option> < option value = "Fairview" > Fairview < /option> < option value = "Flemingdon Park" > Flemingdon Park < /option> < option value = "Goldhawk Park" > Goldhawk Park < /option> < option value = "Lillian H. Smith" > Lillian H.Smith < /option> < option value = "Malvern" > Malvern < /option> < option value = "Maria A. Shchuka" > Maria A.Shchuka < /option> < option value = "McGregor Park" > McGregor Park < /option> < option value = "New Toronto" > New Toronto < /option> < option value = "North York Central" > North York Central < /option> < option value = "Northern District" > Northern District < /option> < option value = "Pape/Danforth" > Pape / Danforth < /option> < option value = "Parkdale" > Parkdale < /option> < option value = "Parliament Street" > Parliament Street < /option> < option value = "Richview" > Richview < /option> < option value = "S. Walter Stewart" > S.Walter Stewart < /option> < option value = "Toronto Reference Library" > Toronto Reference Library < /option> < option value = "York Woods" > York Woods < /option> < option value = "Alderwood" > Alderwood < /option> < option value = "Bayview" > Bayview < /option> < option value = "Beaches" > Beaches < /option> < option value = "Bridlewood" > Bridlewood < /option> < option value = "Centennial" > Centennial < /option> < option value = "City Hall" > City Hall < /option> < option value = "College/Shaw" > College / Shaw < /option> < option value = "Danforth/Coxwell" > Danforth / Coxwell < /option> < option value = "Dawes Road" > Dawes Road < /option> < option value = "Deer Park" > Deer Park < /option> < option value = "Dufferin/St. Clair" > Dufferin / St.Clair < /option> < option value = "Eglinton Square" > Eglinton Square < /option> < option value = "Evelyn Gregory" > Evelyn Gregory < /option> < option value = "Forest Hill" > Forest Hill < /option> < option value = "Fort York" > Fort York < /option> < option value = "Gerrard/Ashdale" > Gerrard / Ashdale < /option> < option value = "High Park" > High Park < /option> < option value = "Jane/Dundas" > Jane / Dundas < /option> < option value = "Jane/Sheppard" > Jane / Sheppard < /option> < option value = "Jones" > Jones < /option> < option value = "Leaside" > Leaside < /option> < option value = "Locke" > Locke < /option> < option value = "Main Street" > Main Street < /option> < option value = "Maryvale" > Maryvale < /option> < option value = "Morningside" > Morningside < /option> < option value = "Mount Dennis" > Mount Dennis < /option> < option value = "Oakwood" > Oakwood < /option> < option value = "Palmerston" > Palmerston < /option> < option value = "Port Union" > Port Union < /option> < option value = "Riverdale" > Riverdale < /option> < option value = "Runnymede" > Runnymede < /option> < option value = "Sanderson" > Sanderson < /option> < option value = "Scarborough Civic Centre" > Scarborough Civic Centre < /option> < option value = "St. Lawrence" > St.Lawrence < /option> < option value = "Steeles" > Steeles < /option> < option value = "Thorncliffe" > Thorncliffe < /option> < option value = "Weston" > Weston < /option> < option value = "Woodside Square" > Woodside Square < /option> < option value = "Wychwood" > Wychwood < /option> < option value = "Yorkville" > Yorkville < /option> < option value = "Amesbury Park" > Amesbury Park < /option> < option value = "Armour Heights" > Armour Heights < /option> < option value = "Bendale" > Bendale < /option> < option value = "Black Creek" > Black Creek < /option> < option value = "Brookbanks" > Brookbanks < /option> < option value = "Burrows Hall" > Burrows Hall < /option> < option value = "Cliffcrest" > Cliffcrest < /option> < option value = "Davenport" > Davenport < /option> < option value = "Elmbrook Park" > Elmbrook Park < /option> < option value = "Guildwood" > Guildwood < /option> < option value = "Highland Creek" > Highland Creek < /option> < option value = "Hillcrest" > Hillcrest < /option> < option value = "Humber Bay" > Humber Bay < /option> < option value = "Humber Summit" > Humber Summit < /option> < option value = "Humberwood" > Humberwood < /option> < option value = "Kennedy/Eglinton" > Kennedy / Eglinton < /option> < option value = "Long Branch" > Long Branch < /option> < option value = "Mimico Centennial" > Mimico Centennial < /option> < option value = "Mount Pleasant" > Mount Pleasant < /option> < option value = "Northern Elms" > Northern Elms < /option> < option value = "Perth/Dupont" > Perth / Dupont < /option> < option value = "Pleasant View" > Pleasant View < /option> < option value = "Queen/Saulter" > Queen / Saulter < /option> < option value = "Rexdale" > Rexdale < /option> < option value = "Spadina Road" > Spadina Road < /option> < option value = "St. Clair/Silverthorn" > St.Clair / Silverthorn < /option> < option value = "St. James Town" > St.James Town < /option> < option value = "Swansea Memorial" > Swansea Memorial < /option> < option value = "Taylor Memorial" > Taylor Memorial < /option> < option value = "Todmorden Room" > Todmorden Room < /option> < option value = "Victoria Village" > Victoria Village < /option> < option value = "Woodview Park" > Woodview Park < /option> < /select> < /span> < label
            for = "selector__program" > Program Type < /label> < span className = "selector" > < select className = "selector__program"
            name = "options"
            id = "selector-program"
            value = {
                this.state.program
            }
            onChange = {
                this.handleChangeProgram
            } > < option value = "none" > None < /option> < option value = "Cultural" > Cultural < /option> < option value = "ESL" > ESL < /option> < option value = "Information & Current Issues" > Information &amp; Current Issues < /option> < option value = "LiteraCy" > LiteraCy < /option> < option value = "LiteraRy" > LiteraRy < /option> < option value = "User Education" > User Education < /option> < /select> < /span> < label
            for = "selector__time" > Time < /label> < span className = "selector" > < select className = "selector__time"
            name = "options"
            id = "selector-time"
            value = {
                this.state.time
            }
            onChange = {
                this.handleChangeTime
            } > < option value = "none" > None < /option> < option value = "9 am-12:30 pm" > 9:00 am - 12:30 pm < /option> < option value = "12:30-3:30 pm" > 12:30 - 3:30 pm < /option> < option value = "3:30-6 pm" > 3:30 - 6:00 pm < /option> < option value = "6-8:30 pm" > 6:00 - 8:30 pm < /option> < /select> < /span> < input className = "button"
            type = "submit"
            value = "Submit" / > < /form> < CardList cards = {
                this.state.cards
            }
            title = {
                this.state.title
            }
            text = {
                this.state.text
            }
            /> < /div>);
    }
}