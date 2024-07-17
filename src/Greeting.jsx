const Greeting =()=>{

    let greetMsg=""
    const time = new Date().getHours();
    console.log(time);
    if(time<12){
        greetMsg="morning"
    }
    else if(time<16){
        greetMsg="afternoon"
    }
    else{
        greetMsg="evening"
    }

    return(
        <>
        <h2>{`Good ${greetMsg} team`}</h2>
        </>
    )
}
export default Greeting;


