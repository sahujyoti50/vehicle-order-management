import { useRouter } from "next/router";
import React from "react";
import { Block, Text } from "vcc-ui";

function LearnDetail() {
  const router = useRouter();
  const learnId = router.query.learnId;
  return (
    <Block extend={{ textAlign: "center", fontWeight: "bold" }}>
      <Text>Welcome To Learning Page : {learnId} Vehicle </Text>
    </Block>
  );
}

export default LearnDetail;
