import { FC, PropsWithChildren } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import clsx from "clsx";
import { colors } from "@/shared/colors";

type AppButtonMode = "fill" | "outline";

interface Props extends TouchableOpacityProps {
  mode?: AppButtonMode;
  iconName?: keyof typeof MaterialIcons.glyphMap;
}

export const AppButton: FC<PropsWithChildren<Props>> = ({
  children,
  mode = "fill",
  iconName,
  ...rest
}) => {
  const isFill = mode == "fill";

  return (
    <TouchableOpacity
      {...rest}
      className={clsx(
        "w-full rounded-xl px-5 flex-row items-center h-button",
        iconName ? "justify-between" : "justify-center",
        {
          "bg-accent-brand": isFill,
          "bg-none border-[1px] border-accent-brand": !isFill,
        }
      )}
    >
      <Text
        className={clsx("text-base", {
          "text-white": isFill,
          "text-accent-brand": !isFill,
        })}
      >
        {children}
      </Text>
      {iconName && (
        <MaterialIcons
          name={iconName}
          color={isFill ? colors.white : colors["accent-brand"]}
          size={24}
        />
      )}
    </TouchableOpacity>
  );
};
