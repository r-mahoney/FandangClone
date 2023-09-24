import { useSession } from "next-auth/react";
import React from "react";
import { Form } from "./Form";

type CommentProps = {
  movieName: string;
};

const Comments: React.FC<CommentProps> = ({ movieName }) => {
  const session = useSession();
  if (session.status !== "authenticated") return;

  return <Form movieName={movieName} />;
};

export default Comments;
