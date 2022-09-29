function Result(props) {
    if (props.result === "winning") {
        return <p>You've Won.</p>;
    } else if (props.result === "loosing") {
        return <p>You've lost.</p>;
    }
    return "";
}
export default Result;