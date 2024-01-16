import styled from "@emotion/styled";

type TypographyComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "strong" | "span";

interface TypographyProps {
  componente: TypographyComponent;
  children?: React.ReactNode;
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  className?: string;
}

const componentes: Record<TypographyComponent, TypographyComponent> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  p: "p",
  strong: "strong",
  span: "span"
};




const Typography: React.FC<TypographyProps> = ({
  componente,
  children,
  color,
  fontSize,
  lineHeight,
  className
}) => {

  const tag = componentes[componente as TypographyComponent];

  const ComponenteUtilizado = styled(tag) <{
    fontWeight?: number,
    color?: string,
    fontSize?: string,
    lineHeight?: string,
  }>`

    color: ${color ? color : "#fff"};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    
  `;

  return <ComponenteUtilizado
    fontSize={fontSize}
    color={color}
    lineHeight={lineHeight}
    className={className}

  >{children}</ComponenteUtilizado>;
};

export default Typography;
