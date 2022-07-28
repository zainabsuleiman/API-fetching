import React , {Component} from 'react';
import Profile from './Profile';
import Search from './Search';


const API='https://api.github.com/users'
class Fetch extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'zainabsuleiman',
            name:"",
            avatar:"",
            repos:"",
            followers:"",
            homeURL:"",
            notfound:""
        };
    }
    getProfile(username){
        let finalURL=`${API}/${username}`;
        fetch(finalURL)
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                username:data.login,
            name:data.name,
            avatar:data.avatr_url,
            repos:data.public_repos,
            followers:data.followers,
            following:data.following,
            homeURL:data.html_url,
            notfound:data.message
            })
        }) 
        .catch((error)=>console.log('there was a problem in fetching data'))
    }
    componentDidMount(){
        this.getProfile(this.state.username);
    }
render(){
    return(
<div>




</div>
    );
}
}