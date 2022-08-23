import styled from "styled-components";

export const NameContainer = styled("div")({
  display: "flex",
  gap: "20px",
  alignItems: "center",
});

export const Avatar = styled("img")({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "1px solid #ccc",
});

export const FlexColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const Name = styled("div")({
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#000",
});

export const Email = styled("div")({
  fontSize: "1rem",
  color: "#555",
});

export const CustomButton = styled("button")(
  {
    borderRadius: "5px",
    padding: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  ({ disabled }) => ({
    color: disabled ? "#777" : "#000",
    backgroundColor: disabled ? "#ccc" : "#fff",
    border: `1px solid ${disabled ? "#ccc" : "#000"}`,
    "&:hover": {
      backgroundColor: disabled ? "#ccc" : "#000",
      color: disabled ? "#777" : "#fff",
    },
  })
);

export const FlexRow = styled("div")({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

export const FlexSpaceBetween = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const CustomSelect = styled("select")(
  {
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#000",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
  ({ disabled }) => ({
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? "0.5" : "1",
  })
);
