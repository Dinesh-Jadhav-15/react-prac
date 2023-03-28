import React, { useEffect, useState } from "react";
import "./FootallGet.css";

const FootallGet = () => {
  const [list, setList] = useState([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState(0);

  const getAllList = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setList(json));
    // console.log(json));
  };
  console.log("list data", list);

  useEffect(() => {
    getAllList();
  }, []);

  const deleteSingleList = (id) => {
    console.log("id ", id);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    });
  };

  const updateList = (id) => {
    // let id = 1;
    console.log("updated id", id);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks PUT Request Example" }),
    };

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => alert("updated"));
  };
  return (
    <div>
      <div className="list-wrapper">
        <h2> List</h2>
        <hr></hr>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">User Id</th>
              <th scope="col">title</th>
              <th scope="col">body</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.slice(0, 10).map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td className="col-3">{item.title}</td>
                  <td className="col-4">{item.body}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary list-update"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      data={item.id}
                    >
                      update
                    </button>
                    <button
                      className="list-delete"
                      onClick={() => deleteSingleList(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                List Update{" "}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div>
                <form>
                  <label id="icon" for="name">
                    <i className="fas fa-envelope"></i>
                  </label>
                  <input
                    type="text"
                    name="body"
                    id="body"
                    placeholder="Body"
                    // value={listItem.body}
                    // onChange={(e) => setBody(e.target.value)}
                  />
                  <label id="icon" for="name">
                    <i className="fas fa-user"></i>
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    // onChange={(e) => setTitle(e.target.value)}
                    // value={listItem.title}
                  />
                  <label id="icon" for="name">
                    <i className="fas fa-unlock-alt"></i>
                  </label>
                  <input
                    type="userId"
                    name="userId"
                    id="userId"
                    placeholder="User Id"
                    value={userId}
                    // onChange={(e) => setUserId(e.target.value)}
                  />
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => updateList()}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootallGet;
