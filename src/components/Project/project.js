import React from "react";

export default function Project(props) {
  return (
    // <div className="container">
    <div className="container-fluid">
      <section className="row">
        <section className="col-sm-12">
          <section className="card-body m-2 pb-3">
            <h1 className="card-title p-1">
              <strong>{props.name}</strong>
            </h1>
            <hr />
            <section className="card-body">
              <div className="row">
                <figure className="card col-md-6 p-4">
                  <img
                    src={props.image}
                    className="img-fluid rounded"
                    alt="img-thumbnail"
                  />
                  <p>
                    {props.description}
                  </p>
                  <a className="mt-auto" href={props.repo}>
                    <hr />
                    <button className="button mt-auto">
                      <strong>Github Repository</strong>
                    </button>
                  </a>
                  <a className="mt-auto" href={props.deployed}>
                    <hr />
                    <button className="button mt-auto">
                      <strong>Deployed Application</strong>
                    </button>
                  </a>
                </figure>
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
    // </div>
  );
}
