import { IconProps } from "@/components/icons/Icons";
import LogoModulo1 from "@/components/icons/LogoModulo1";
import LogoModulo2 from "@/components/icons/LogoModulo2";
import LogoModulo3 from "@/components/icons/LogoModulo3";
import LogoModulo4 from "@/components/icons/LogoModulo4";
import LogoModuloBlanco1 from "@/components/icons/LogoModuloBlanco1";
import LogoModuloBlanco2 from "@/components/icons/LogoModuloBlanco2";
import LogoModuloBlanco3 from "@/components/icons/LogoModuloBlanco3";
import LogoModuloBlanco4 from "@/components/icons/LogoModuloBlanco4";

interface FeaturesForModule {
  LogoTSX: ({}: IconProps) => React.ReactNode;
  brokenBackgroundColor: string;
  backgroundButtonGradient: string;
  LogoModuloBlanco: ({}: IconProps) => React.ReactNode;
}

export const ModuleFeatures: FeaturesForModule[] = [
  {
    LogoTSX: ({ className, color, title }) => (
      <LogoModulo1 className={className} color={color} title={title} />
    ),
    backgroundButtonGradient:
      "linear-gradient(90deg, #1E40AF 0%, #03ACCD 100%)",
    brokenBackgroundColor: "#E6F3FF",
    LogoModuloBlanco: ({ className, color, title }) => (
      <LogoModuloBlanco1 className={className} color={color} title={title} />
    ),
  },
  {
    LogoTSX: ({ className, color, title }) => (
      <LogoModulo2 className={className} color={color} title={title} />
    ),
    backgroundButtonGradient:
      "linear-gradient(90deg, #2DAF33 0%, #A9D445 100%)",
    brokenBackgroundColor: "#EAFFE8",
    LogoModuloBlanco: ({ className, color, title }) => (
      <LogoModuloBlanco2 className={className} color={color} title={title} />
    ),
  },
  {
    LogoTSX: ({ className, color, title }) => (
      <LogoModulo3 className={className} color={color} title={title} />
    ),
    backgroundButtonGradient:
      "linear-gradient(90deg, #7B1FA2 0%, #CC73CB 100%)",
    brokenBackgroundColor: "#E9D1F3",
    LogoModuloBlanco: ({ className, color, title }) => (
      <LogoModuloBlanco3 className={className} color={color} title={title} />
    ),
  },
  {
    LogoTSX: ({ className, color, title }) => (
      <LogoModulo4 className={className} color={color} title={title} />
    ),
    backgroundButtonGradient:
      "linear-gradient(90deg, #D35400 0%, #F39C12 100%)",
    brokenBackgroundColor: "#FFE5BE",
    LogoModuloBlanco: ({ className, color, title }) => (
      <LogoModuloBlanco4 className={className} color={color} title={title} />
    ),
  },
];
