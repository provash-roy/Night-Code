import StatusBar from "./status-bar";
type Props = {
  onSubmit: (text: string) => void;
  disabled?: boolean;
};

function InputBar({ onSubmit, disabled }: Props) {
  return (
    <box width="100%" alignItems="center">
      <box border={["left"]} borderColor="cyan" >
        <box
          position="relative"
          justifyContent="center"
          width="100%"
          paddingX={1}
          paddingY={2}
          backgroundColor="#1A1A24"
          gap={1}
        >
          <textarea
            placeholder={`Ask anything... "Fix a bug in the database"`}
            focused={disabled}
          />
          <StatusBar />
        </box>
      </box>
    </box>
  );
}

export default InputBar;
