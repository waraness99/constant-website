export const ProjectMetadataSection = ({ title, children }: any) => (
  <div className="space-y-4 mb-8">
    <div className="space-y-2">
      <p className="text-lg font-semibold text-white">{title}</p>
      <div className="w-full h-px bg-white-20" />
    </div>
    {children}
  </div>
);
