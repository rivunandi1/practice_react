import withHeader from "./withHeader";

function Dashboard(props){
    return(
        <div className="App">
            <h4>{props.title}</h4>
            <hr/>
            <p>
            Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking .
            </p>
            <></>
        </div>
    );
}
export default withHeader(Dashboard);