import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  // Create a temporary element to extract text content
  const tempElement = document.createElement("div");
  tempElement.innerHTML = content;
  const textContent = tempElement.innerText || tempElement.textContent;

  // Truncate text content to 70 characters
  const truncatedContent =
    textContent.length > 70 ? textContent.slice(0, 70) + "..." : textContent;

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="content">{truncatedContent}</p>
      </div>
    </div>
  );
}
