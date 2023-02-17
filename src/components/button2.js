export function Button2({ action, title, clickFunc }) {
  return (
    <>
      <form
        onSubmit={clickFunc}
        {...(action ? (action = { action }) : (action = { clickFunc }))}
      >
        <button className="grey">{title}</button>
      </form>
    </>
  );
}
