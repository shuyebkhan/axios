import useFetch from "./useFetch";

function Apidata() {
  const { setData, isError } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <>
      <div className="container">
        <h1>Fetch-Api</h1>
        {!isError == "" && <h2>{isError}</h2>}
        <table className="table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER_ID</th>
              <th>Title</th>
            </tr>
          </thead>
          {setData.map(({ id, userId, title }) => {
            return (
              <tbody key={id}>
                <tr>
                  <td>{id}</td>
                  <td>{userId}</td>
                  <td>{title}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Apidata;
