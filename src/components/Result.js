function Result(props) {
    if (props.result === "winning") {
        return <p>You've Won.</p>;
    }
    return <p>You've lost.</p>;
}
export default Result;