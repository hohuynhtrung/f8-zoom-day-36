import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import style from "./Posts.module.scss";
import Pagination from "../../components/Pagination";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const postsPerPage = 20;

  const totalPage = 5;

  const handlePageChange = (pageNumber) => {
    setSearchParams({ page: pageNumber });
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error call API:", error);
        setLoading(false);
      });
  }, [currentPage]);

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const truncateBody = (text) => {
    if (!text) return "";
    if (text.length <= 100) return text;
    return text.substring(0, 100) + "...";
  };

  return (
    <div className={style["posts-container"]}>
      <h1>Posts</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={style["posts-grid"]}>
            {posts.map((post) => (
              <div className={style["post-card"]} key={post.id}>
                <div className={style["post-info"]}>
                  <h3>{capitalizeFirstLetter(post.title)}</h3>
                  <p>{truncateBody(post.body)}</p>
                </div>
                <Link to={`/post/${post.id}`} className={style["detail-btn"]}>
                  View detail
                </Link>
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
