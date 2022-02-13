import React from "react";
import { Flex, Inline, Icon, Spacer, useTheme } from "vcc-ui";
import { CarouselFooterProps } from "../../../model/CarouselFooterProps";
import styles from "./CarouselFooter.module.css";

export const CarouselFooter: React.FC<CarouselFooterProps> = ({
  clickPrev,
  clickNext,
}) => {
  const { breakpoints } = useTheme();
  return (
    <Flex
      extend={{
        justifyContent: "flex-end",
        adding: "1rem 0",
        flexDirection: "row",
        [breakpoints.untilM]: {
          display: "none",
        },
      }}
    >
      <Inline as="button" className={`${styles.prev_button} arrow-prev`}>
        <Icon type="media-previous-40" />
      </Inline>
      <Spacer />
      <Inline as="button" className={`${styles.next_button} arrow-next`}>
        <Icon type="media-next-40" />
      </Inline>
    </Flex>
  );
};
