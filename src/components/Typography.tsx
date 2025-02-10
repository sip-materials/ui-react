import { TypographyProps } from './Typography.interface';

/** Primary UI component for user interaction */
export const Typography = ({
  children,
  ...props
}: TypographyProps) => {
  return (
    <p
      {...props}
    >
      {children}
    </p>
  );
};
