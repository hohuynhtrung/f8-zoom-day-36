import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./PostDetail.module.scss";
import Loading from "../../components/Loading";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
    ])
      .then(async ([resPost, resComment]) => {
        if (!resPost.ok || !resComment.ok) {
          throw new Error("Failed to fetch data");
        }

        const postData = await resPost.json();
        const commentData = await resComment.json();

        setPost(postData);
        setComments(commentData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error call API:", error);
        setLoading(false);
      });
  }, [id, navigate]);

  const capitalizeFirstLatter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className={style["post-detail-container"]}>
      {loading ? (
        <Loading />
      ) : (
        <div className={style["post-content"]}>
          {post && (
            <div className={style["post-detail"]}>
              <div className={style["post-breadcrumb"]}>
                <button onClick={() => navigate(-1)}>Posts</button>/{" "}
                {post.title}
              </div>
              <div className={style["detail-info"]}>
                <p>User Id: {post.userId}</p>
                <h3>{post.title}</h3>
                <p>{capitalizeFirstLatter(post.body)}</p>
              </div>
            </div>
          )}
          <h3>Comments ({comments ? comments.length : 0})</h3>
          <div className={style["post-comments"]}>
            {comments.map((comment) => (
              <div className={style["comment-item"]} key={comment.id}>
                <h5>
                  {capitalizeFirstLatter(comment.name)}{" "}
                  <small>({comment.email})</small>
                </h5>
                <p>{capitalizeFirstLatter(comment.body)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
