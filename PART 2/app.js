class ReactContainer extends React.Component {
  // JSX tags
  // JSX there should be one parent element
  render() {
    return (
      <div>
        <p>
        Hello! Welcome to Kalvium
        </p>
        <div>This is babel</div>
      </div>
    );
  }
}

const container = document.getElementById("react-container");
// Direclty pass the component to render
ReactDOM.render(<ReactContainer />, container);
