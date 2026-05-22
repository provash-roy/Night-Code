import InputBar from "./input-bar";

function Header() {
  return (
    <box alignItems="center" justifyContent="center" flexGrow={1}>
      <box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
      >
        <ascii-font font="tiny" text="Night" color="gray" />
        <ascii-font font="tiny" text="Code" />
      </box>
    </box>
  );
}

export default Header;
