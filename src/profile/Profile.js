

const Profile= props => {
    console.log(`props:`, props.name);
    return (
        <div>
        <h1>{props.fullName}</h1>
        <h1>{props.bio}</h1>
        <h1>{props.profession}</h1>
        <img src={props.children} />
        <alert {...props.handleName(props.fullName)}></alert>

    </div>
   
 
   );   

   };
   export default Profile;
   
Profile.defaultProps = {
    fullName: "KHalil"
}

   ;