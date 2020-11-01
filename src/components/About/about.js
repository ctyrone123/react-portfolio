import React from "react";

export default function About() {
  return (
    // <div className="container">
    <main class="container-fluid p-5">
      <section class="row">
        <section class="col-sm-8">
          <div class="card m-2 p-3">
            <h2 class="card-title p-1">
              <strong> About Me </strong>{" "}
            </h2>{" "}
            <hr />
            <div class="row">
              <div class="col m-3">
                <img
                  src="images/profile.jpg"
                  class="thumbnail img-fluid float-left m-2"
                  alt="img-thumbnail"
                />
                <div class="caption">
                  <p>
                  ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                   veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
                   ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                   consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                   porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                   adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                   dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
            
                  </p>
                  <p>
                    My skills Include:
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                   porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                   adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                   dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
                  </p>
                  <p>
                    <a href="">
                      <strong> My Resume </strong>{" "}
                    </a>{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </section>{" "}
    </main>
    // </div>
  );
}