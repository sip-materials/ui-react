import { HTMLAttributes, useEffect, useState } from "react"
import logo from "./AMIJAM.png";

export interface LogoProps extends HTMLAttributes<HTMLImageElement> {
  size: 'sm' | 'md' | 'lg';
}

export const AmiJamLogo = (props: LogoProps) => {
  const { size, ...elementProps } = props;
  const [height, setHeight] = useState(32);
  useEffect(() => {
    if (size === 'sm') {
      setHeight(32);
    } else if (size === 'md') {
      setHeight(48);
    } else if (size === 'lg') {
      setHeight(64);
    }
  }, [size]);
  return (
    <img
      height={height}
      src={logo}
      {...elementProps}
    />
  )
}

AmiJamLogo.defaultProps = {
  size: "md"
}
