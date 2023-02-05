var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Sample component
function LikeButton() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      liked = _React$useState2[0],
      setLiked = _React$useState2[1];

  if (liked) {
    return "You liked this!";
  }

  return React.createElement(
    "button",
    {
      onClick: function onClick() {
        setLiked(true);
      }
    },
    "Like"
  );
}

// Reusable Card for layout
function Card(_ref) {
  var id = _ref.id,
      title = _ref.title,
      body = _ref.body;

  return React.createElement(
    "article",
    { className: "card card-" + id },
    React.createElement(
      "h2",
      null,
      title
    ),
    React.createElement(
      "p",
      null,
      body
    )
  );
}

var data = [{
  title: "Team Builder",
  body: "Scans our talent network to create the optimal team for your project"
}, {
  title: "Calculator",
  body: "Uses data from past projects to provide better delivery estimates"
}, {
  title: "Karma",
  body: "Regularly evaluates our talent to ensure quality"
}, {
  title: "Supervisor",
  body: "Monitors activity to identify project roadblocks"
}];

// Layout
function CardLayout() {
  return React.createElement(
    "article",
    { className: "cards-container" },
    React.createElement(
      "article",
      { className: "card-wrapper" },
      data.map(function (info, index) {
        return React.createElement(Card, Object.assign({ key: index, id: index + 1 }, info));
      })
    )
  );
}

// Rendering HTML in domContainer.
var domContainer = document.querySelector("#react-in-website");
ReactDOM.render(React.createElement(CardLayout, null), domContainer);