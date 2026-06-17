import { weddingData } from "../data/weddingData";

export const ChatLink = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "150px",
        padding: "15px",
        fontSize: "20px",
        color: "#666",
        background: "#fffaf0",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1002,
      }}
    >
      А чтобы оставаться на связи — милости просим в общий{" "}
      <a
        href={weddingData.chatLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#4A76A8",
          textDecoration: "underline",
        }}
      >
        чатик ВКонтакте
      </a>
      !
    </div>
  );
};
