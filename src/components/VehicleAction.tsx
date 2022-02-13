import React from "react";
import { Link, Flex } from "vcc-ui";
import { VehicleActionProps } from "../../model/VehicleActionProps";

export const VehicleAction: React.FC<VehicleActionProps> = ({ id }) => {
  return (
    <Flex
      extend={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Link href={`/learn/${id}`} arrow="right" aria-label={`${id}`}>
        LEARN
      </Link>
      <Link href={`/shop/${id}`} arrow="right" aria-label={`${id}`}>
        SHOP
      </Link>
    </Flex>
  );
};
