import React from "react"

const Comment = ({ author, bodyHTML, createdAt, id, reactionGroups }) => {
  const date = new Date(createdAt).toLocaleDateString()
  return (
    <div className="comment" key={id}>
      <div className="comment-user">
        <a href={author.url} target="_blank" rel="noopener noreferrer">
          <img src={author.avatarUrl} alt={`GitHub user ${author.login}`} />
        </a>
      </div>
      <div className="comment-main">
        <div className="header">
          <a href={author.url} target="_blank" rel="noopener noreferrer">
            {author.login}
          </a>{" "}
          commented on {date}
        </div>
        <div className="body" dangerouslySetInnerHTML={{ __html: bodyHTML }} />
        <div className="footer"></div>
      </div>
    </div>
  )
}

export default Comment
