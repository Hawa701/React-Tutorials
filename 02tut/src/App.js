import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Missing from "./pages/Missing";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Blog 1",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat doloremque autem reprehenderit, cupiditate ducimus labore excepturi odit maxime doloribus! Dolorem sint maxime quia praesentium aliquam voluptatibus exercitationem. Officia, harum consequuntur.",
    },
    {
      id: 2,
      title: "Blog 2",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat doloremque autem reprehenderit, cupiditate ducimus labore excepturi odit maxime doloribus! Dolorem sint maxime quia praesentium aliquam voluptatibus exercitationem. Officia, harum consequuntur.",
    },
    {
      id: 3,
      title: "Blog 3",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat doloremque autem reprehenderit, cupiditate ducimus labore excepturi odit maxime doloribus! Dolorem sint maxime quia praesentium aliquam voluptatibus exercitationem. Officia, harum consequuntur.",
    },
    {
      id: 4,
      title: "Blog 4",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat doloremque autem reprehenderit, cupiditate ducimus labore excepturi odit maxime doloribus! Dolorem sint maxime quia praesentium aliquam voluptatibus exercitationem. Officia, harum consequuntur.",
    },
    {
      id: 5,
      title: "Blog 5",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat doloremque autem reprehenderit, cupiditate ducimus labore excepturi odit maxime doloribus! Dolorem sint maxime quia praesentium aliquam voluptatibus exercitationem. Officia, harum consequuntur.",
    },
    {
      id: 6,
      title: "Blog 6",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat doloremque autem reprehenderit, cupiditate ducimus labore excepturi odit maxime doloribus! Dolorem sint maxime quia praesentium aliquam voluptatibus exercitationem. Officia, harum consequuntur.",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const history = useNavigate();

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id != id);
    setPosts(postList);
    history("/");
  };

  return (
    <>
      <Header title="React Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<Home posts={posts} />}></Route>
        <Route exact path="/post" element={<NewPost />}></Route>
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        ></Route>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;