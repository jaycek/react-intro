const Profile = (props)=>{

    const {contactName,image,phone,email} = props.contact

    return(
    <div className="main">
        <h1>My Contacts</h1>
        <div>
            <h2>{contactName}</h2>
            <img src={image} alt="" />
        </div>
        <div>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    </div>

    )
}
export default Profile;