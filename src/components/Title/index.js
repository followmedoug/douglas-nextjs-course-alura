export default function Title({ Tag, children, ...props }) {
  return (
    <>
      <Tag {...props}>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  );
}
