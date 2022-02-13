import React from "react";
import Image from "next/image";
import { View, Text, Flex } from "vcc-ui";
import { VehicleAction } from "./VehicleAction";
import { VehicleProps } from "../../model/VehicleProps";

export const Vehicle: React.FC<VehicleProps> = ({
  id,
  modelName,
  bodyType,
  modelType,
  imageUrl,
}) => {
  return (
    <Flex extend={{ flexDirection: "column" }}>
      <View>
        <span>
          <Text>
            <em>{bodyType}</em>
          </Text>
        </span>
        <View>
          <Text variant="bates">
            {modelName}
            <Text
              subStyle="inline-link"
              extend={{ marginLeft: "5px", fontWeight: "bold" }}
            >
              {modelType}
            </Text>
          </Text>
        </View>
        <View>
          <Image
            src={imageUrl}
            alt="car"
            width={278}
            height={208}
            loading="eager"
            layout="fixed"
          />
        </View>
      </View>
      <VehicleAction id={id} />
    </Flex>
  );
};
