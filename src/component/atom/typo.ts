import { styled } from "#/stitches.config";
import { Property } from "@stitches/react/types/css";

const typoGenerator = (
  fontSize: number,
  fontWeight: Property.FontWeight,
  lineHeight?: number
) =>
  styled("p", {
    fontSize: fontSize + "rem",
    fontWeight,
    margin: 0,
    lineHeight: lineHeight + 'rem',
    variants: {
      accent: {
        true: {
          color: "$accent",
        },
      },
      strike: {
        true: {
          textDecoration: 'line-through'
        }
      },
      notight: {
        true: {
          letterSpacing: "0em",
        }
      },
      center: {
        true: {
          textAlign: "center"
        }
      }
    },
  });

export const Subheader = typoGenerator(3, "bold");
export const Description = typoGenerator(2, "bold");
export const Text = typoGenerator(2, "normal", 3);
