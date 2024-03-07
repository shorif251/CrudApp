"use client";

import { useState } from "react";
import Button from "../ReuseableComonents/Button";

export default function Like() {
  const [like, setLike] = useState(0);

  const likeIncrement = () => {
    setLike((old) => old + 1);
  };

  return (
    <>
      <Button
        type="button"
        btnName={`Like ${like}`}
        btnStyle=""
        onClick={likeIncrement}
      />
    </>
  );
}
