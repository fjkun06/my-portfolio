import Button from "./Button";

const HomeCTA = ({ callToActions }: { callToActions: string[][] }) => {
  return (
    <div className="cta">
      {callToActions.map(([text, route], i) => (
        <Button text={text} route={route} key={i} />
      ))}
    </div>
  );
};

export default HomeCTA;
