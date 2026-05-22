function StatusBar() {
  return (
    <box flexDirection="row" gap={1}>
      <text fg="cyan">Build</text>
      <text fg="gray">{" > "}</text>
      <text>opus-4-6</text>
    </box>
  );
}

export default StatusBar;
