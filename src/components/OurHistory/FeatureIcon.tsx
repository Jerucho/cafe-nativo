interface FeatureIconProps {
  icon: React.ReactNode;
  title: string;
}

export const FeatureIcon = ({ icon, title }: FeatureIconProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-primary">
        {icon}
      </div>
      <span className="text-center text-sm">{title}</span>
    </div>
  );
};
