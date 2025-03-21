import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faList, faPencilRuler } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <section className="bg-white py-5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-4">
          <p className="text-muted">WHAT WE DO</p>
          <h3>
            We Provide the{" "}
            <span className="text-warning">Perfect Solution</span> to your
            business growth
          </h3>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {/** Service Card 1 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card shadow-sm text-center p-3">
              <FontAwesomeIcon className="icon-box mb-3" icon={faMap} size="2x" />
              <h4>Explore</h4>
              <p>
                Agile, waterfall, hybrid or otherwise, we research your business
                to find the best transformation approach.
              </p>
            </div>
          </div>

          {/** Service Card 2 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card shadow-sm text-center p-3">
              <FontAwesomeIcon className="icon-box mb-3" icon={faPencilRuler} size="2x" />
              <h4>Plan, Create & Execute</h4>
              <p>
                Using an agile approach, we map out strategies to execute your
                business transformation.
              </p>
            </div>
          </div>

          {/** Service Card 3 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card shadow-sm text-center p-3">
              <FontAwesomeIcon className="icon-box mb-3" icon={faMap} size="2x" />
              <h4>Optimization</h4>
              <p>
                Using analytics, we continuously refine strategies for maximum
                growth.
              </p>
            </div>
          </div>

          {/** Service Card 4 */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card shadow-sm text-center p-3">
              <FontAwesomeIcon className="icon-box mb-3" icon={faList} size="2x" />
              <h4>Opportunity & Research</h4>
              <p>
                We help you explore market opportunities and keep your business
                ahead of competitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
