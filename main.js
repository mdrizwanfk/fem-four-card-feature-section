import CardLayout from "./components/CardLayout";

console.log(React.version);
console.log(CardLayout);

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return (
      <button
        onClick={() => {
          this.setState({ liked: true });
        }}
      >
        Like
      </button>
    );
  }
}

const domContainer = document.querySelector("#react-in-website");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
