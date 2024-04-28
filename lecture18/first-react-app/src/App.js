import "./App.css";
const books = [
  {
    bookName: "After You",
    author: "Jojo Myoes",
    rating: 1.9,
    info: "It continues the story of Louisa Clark after Will's death. She is trying to move on.",
    cover: "images/afteryou.jpg",
  },
  {
    bookName: "Big Magi",
    author: "Elizabeth Gilbert",
    rating: 1.2,
    info: "Readers of all ages and walks of life have drawn inspiration from Elizabeth Gilbert’s books.",
    cover: "images/bigmagic.jpg",
  },
  {
    bookName: "A Tale for the Time Being",
    author: "Ruth Ozeki",
    rating: 1.9,
    info: "In Tokyo, sixteen-year-old Nao has decided there’s only one escape from her aching loneliness",
    cover: "images/tale.jpg",
  },
  {
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 1.9,
    info: "The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King",
    cover: "images/greatgatsby.jpg",
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <main>
        {books.map((element) => (
          <Book data={element} />
        ))}
      </main>
    </div>
  );
}
function NavBar() {
  return (
    <nav class="nav-bar">
      <div class="nav1">
        <a href="">Browse Categories</a>
        <input type="text" id="search_book" placeholder="Search Book" />
      </div>
      <h3>readbooks</h3>
      <div class="icon-about">
        <i class="material-icons">
          <span class="material-icons-outlined">account_circle</span>
        </i>
        <a href="">About-Us</a>
      </div>
    </nav>
  );
}

function Book(props) {
  return (
    <div class="books">
      <div>
        <img src={props.data.cover} alt="" class="book-img" />
      </div>
      <div class="descp">
        <h2 class="book-name">{props.data.bookName}</h2>
        <h3 class="author">{props.data.author}</h3>
        <h3 class="rating">{props.data.rating} rating</h3>
        <p class="info">{props.data.info}</p>
        <button type="submit">See the Book</button>
      </div>
    </div>
  );
}
export default App;
