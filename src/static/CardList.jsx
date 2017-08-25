class CardList extends React.Component {

    constructor(props){
        super(props)
        this.state = props
    }

    render() {

        // for(var i = 0; i < 1; i++){

        // }
        let elements = this.props.cards.map((element) => {
            return (
                <Card card={element} />
            )
        })

        return (
            <div className="body">
                <ul className="flex-container wrap">
                    {elements}
                    <InfoCard title={this.props.title} text={this.props.text} />
                </ul>
            </div>
        );
    }
}