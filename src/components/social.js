import React from "react"

export const Social = props => {
  const { site, url } = props
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social"
      style={{
        display: "inline-block",
        padding: "0 5px 0 5px",
        marginBottom: "3px",
        marginRight: "5px",
        color: "#0366d6",
        boxShadow: "none",
      }}
    >
      {site}
    </a>
  )
}
