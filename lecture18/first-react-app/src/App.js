import "./App.css";
const books = [
  {
    bookName: "After You",
    author: "Jojo Myoes",
    rating: 1.9,
    info: "It continues the story of Louisa Clark after Will's death. She is trying to move on.",
    cover: "images/afteryou.jpg",
    id: 1,
  },
  {
    bookName: "Big Magi",
    author: "Elizabeth Gilbert",
    rating: 1.2,
    info: "Readers of all ages and walks of life have drawn inspiration from Elizabeth Gilbert’s books.",
    cover: "images/bigmagic.jpg",
    id: 2,
  },
  {
    bookName: "A Tale for the Time Being",
    author: "Ruth Ozeki",
    rating: 1.9,
    info: "In Tokyo, sixteen-year-old Nao has decided there’s only one escape from her aching loneliness",
    cover: "images/tale.jpg",
    id: 3,
  },
  {
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 1.9,
    info: "The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King",
    cover: "images/greatgatsby.jpg",
    id: 4,
  },
];

function App() {
  return (
    <div>
      <NavBar key="8" />
      <main>
        {books.map((element) => (
          <Book data={element} key={element.id} />
        ))}
      </main>
    </div>
  );
}
function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav1">
        <a href="">Browse Categories</a>
        <input type="text" id="search_book" placeholder="Search Book" />
      </div>
      <h3>readbooks</h3>
      <div className="icon-about">
        <i className="material-icons">
          <span className="material-icons-outlined">account_circle</span>
        </i>
        <a href="">About-Us</a>
      </div>
    </nav>
  );
}

function Book({ data }, key) {
  return (
    <div className="books">
      <div>
        <img src={data.cover} alt="" className="book-img" />
      </div>
      <div className="descp">
        <h2 className="book-name">{data.bookName}</h2>
        <h3 className="author">{data.author}</h3>
        <h3 className="rating">{data.rating} rating</h3>
        <p className="info">{data.info}</p>
        <button type="submit">See the Book</button>
      </div>
    </div>
  );
}
export default App;
