import React from "react";
import {DescriptionType} from "@/data/types";
import {
  AcademicCapIcon,
  BoltIcon,
  BugAntIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  CakeIcon,
  HomeIcon,
  MapIcon,
  NewspaperIcon,
  PencilSquareIcon,
  TruckIcon,
  WalletIcon
} from "@heroicons/react/24/outline";

// Mapping of description types to icon components
const ICONS: Record<DescriptionType, React.ComponentType<{ className?: string }>> = {
  campground: BugAntIcon,
  fbo: BuildingOfficeIcon,
  food: CakeIcon,
  fuel: WalletIcon,
  museum: AcademicCapIcon,
  restrooms: HomeIcon,
  summary: NewspaperIcon,
  terminalBuilding: BuildingOffice2Icon,
  transientParking: MapIcon,
  transportation: TruckIcon,
  additionalInfo: PencilSquareIcon,
};

type IconComponentProps = {
  type: DescriptionType;
  className?: string;
};

const ACCENT_CLASSES = {
  campground: "bg-teal-100 text-teal-600",
  fbo: "bg-rose-100 text-rose-600",
  food: "bg-lime-100 text-lime-600",
  fuel: "bg-orange-100 text-orange-600",
  museum: "bg-indigo-100 text-indigo-600",
  restrooms: "bg-pink-100 text-pink-600",
  summary: "bg-purple-100 text-purple-600",
  terminalBuilding: "bg-blue-100 text-blue-600",
  transientParking: "bg-green-100 text-green-600",
  transit: "bg-yellow-100 text-yellow-600",
  transportation: "bg-sky-100 text-sky-600",
  additionalInfo: "bg-gray-100 text-gray-600",

}

const IconComponent = ({type, className = "w-6 h-6"}: IconComponentProps) => {
  // Use the mapped icon, fallback to BoltIcon if type not found
  const Icon = ICONS[type] ?? BoltIcon;
  const accentClass = ACCENT_CLASSES[type] || "bg-purple-100 text-purple-600";

  return (
    <div className={`p-2 rounded-lg mr-3 ${accentClass}`}>
      <Icon className={className}/>
    </div>
  )
};

export default IconComponent;
