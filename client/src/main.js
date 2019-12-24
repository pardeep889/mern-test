import React,{Component} from 'react';
import axios from 'axios';
import Moment from 'react-moment';

class Main extends Component {

    constructor(){
        super();
        this.state =  {
            loading: true,
            data: '',
        }
    }

    componentDidMount(){
        axios.get('/api/data').then((resp) => {
            this.setState({data: resp.data.classes, loading:false})
        }).catch(err => console.log(err))
    }

    renderClasses = (classes) => (
      classes.map((item,i) => 
           (<div key={i} className="card">
                <div className="container">
                    <h4><strong>{item.title}</strong> with <i> {item.instructorDetails.name} </i></h4> 
                    <p>Level: {item.level}</p>
                    <p>Description: {item.description}</p>
                    <p> Start at:  <Moment>{item.scheduledStart}</Moment> </p> 
                    <p> Duration:  {item.durationInMinutes} min </p> 
                </div>
            </div>)
      )
    )

    render(){
        const {loading, data} = this.state;
        if(loading){
            return <div className='loader'> </div>
        }
        return(
            <React.Fragment>
               {this.renderClasses(data)}
            </React.Fragment>
        )
    }
}

export default Main;