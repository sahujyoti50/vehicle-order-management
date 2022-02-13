import React from "react";
import { useRouter } from "next/router";
import { Block, Text } from "vcc-ui";

function ShopDetail() {
  const router = useRouter();
  const shopId = router.query.shopId;
  return (
    <Block extend={{ textAlign: "center", fontWeight: "bold" }}>
      <Text> Welcome To Shoping Page : {shopId} Vehicle </Text>
    </Block>
  );
}

export default ShopDetail;
