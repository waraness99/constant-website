interface BaseProps {
  label: string;
}

interface WithValue extends BaseProps {
  value: string | undefined;
  children?: never;
}

interface WithChildren extends BaseProps {
  value?: never;
  children: React.ReactNode;
}

type ProjectMetadataItemProps = WithValue | WithChildren;

export const ProjectMetadataItem = ({ label, value, children }: ProjectMetadataItemProps) => (
  <div className="space-y-1">
    <p className="text-xs text-opacity-40">{label}</p>
    <p className="text-sm">{value}</p>
    {children}
  </div>
);
