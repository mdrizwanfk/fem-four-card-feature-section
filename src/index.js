// Sample component
function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  return (
    <button
      onClick={() => {
        setLiked(true);
      }}
    >
      Like
    </button>
  );
}

// Reusable Card for layout
function Card({ id, title, body }) {
  return (
    <article className={`card card-${id}`}>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

const data = [
  {
    title: "Team Builder",
    body: "Scans our talent network to create the optimal team for your project",
  },
  {
    title: "Calculator",
    body: "Uses data from past projects to provide better delivery estimates",
  },
  {
    title: "Karma",
    body: "Regularly evaluates our talent to ensure quality",
  },
  {
    title: "Supervisor",
    body: "Monitors activity to identify project roadblocks",
  },
];

// Layout
function CardLayout() {
  return (
    <article className="cards-container">
      <article className="card-wrapper">
        {data.map((info, index) => (
          <Card key={index} id={index + 1} {...info} />
        ))}
      </article>
    </article>
  );
}

// Rendering HTML in domContainer.
let domContainer = document.querySelector("#react-in-website");
ReactDOM.render(<CardLayout />, domContainer);
