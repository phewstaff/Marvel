export function Button({ title, clickFunc, action }) {
  return (
    <>
      <form {...(action ? (action = { action }) : (action = { clickFunc }))}>
        <button onClick={clickFunc} className="red">
          {title}
        </button>
      </form>
    </>
  );
}
