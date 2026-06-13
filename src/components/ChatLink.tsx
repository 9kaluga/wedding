import { weddingData } from "../data/weddingData";

export const ChatLink = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "15px",
        marginTop: "15px",
        fontSize: "20px",
        color: "#666",
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
