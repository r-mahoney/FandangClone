import React from "react";
import { Form } from "./Form";

type CommentProps = {
  movieName: string;
};

const Comments: React.FC<CommentProps> = ({ movieName }) => {

  return <Form movieName={movieName} />;
};

export default Comments;
