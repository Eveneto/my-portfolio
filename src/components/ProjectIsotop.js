import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const ProjectIsotop = () => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      layoutMode: "masonry",
      percentPosition: true,
      masonry: { columnWidth: ".works-col" },
    });

    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="works-box">
        <div className="filter-links">
          <button className={`c-pointer ${activeBtn("*")}`} onClick={handleFilterKeyChange("*")}>All</button>
          <button className={`c-pointer ${activeBtn("sorting-health")}`} onClick={handleFilterKeyChange("sorting-health")}>Health</button>
          <button className={`c-pointer ${activeBtn("sorting-congress")}`} onClick={handleFilterKeyChange("sorting-congress")}>Congress</button>
          <button className={`c-pointer ${activeBtn("sorting-food")}`} onClick={handleFilterKeyChange("sorting-food")}>Food</button>
          <button className={`c-pointer ${activeBtn("sorting-machinery")}`} onClick={handleFilterKeyChange("sorting-machinery")}>Machinery</button>
          <button className={`c-pointer ${activeBtn("sorting-winery")}`} onClick={handleFilterKeyChange("sorting-winery")}>Winery</button>
        </div>

        <div className="works-items works-list-items row">
          {/* Efycard */}
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-health">
            <div className="works-item">
              <Link href="https://efycard.com.br" target="_blank" rel="noopener noreferrer">
                <a>
                  <span className="image">
                    <span className="img">
                      <img src="assets/images/efycard.jpg" alt="Efycard" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span className="name">Efycard</span>
                    <span className="category">Health</span>
                  </span>
                </a>
              </Link>
            </div>
          </div>

          {/* Congresso de Cardiologia de Pernambuco */}
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-congress">
            <div className="works-item">
              <Link href="https://congressodecardiologia.com.br" target="_blank" rel="noopener noreferrer">
                <a>
                  <span className="image">
                    <span className="img">
                      <img src="assets/images/sbcpe.jpg" alt="Congresso de Cardiologia de Pernambuco" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span className="name">Congresso de Cardiologia de Pernambuco</span>
                    <span className="category">Congress</span>
                  </span>
                </a>
              </Link>
            </div>
          </div>

          {/* Boku’s */}
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-food">
            <div className="works-item">
              <Link href="https://bokus.com.br" target="_blank" rel="noopener noreferrer">
                <a>
                  <span className="image">
                    <span className="img">
                      <img src="assets/images/bokus.png" alt="Boku’s" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span className="name">Boku’s</span>
                    <span className="category">Food</span>
                  </span>
                </a>
              </Link>
            </div>
          </div>

          {/* FW Máquinas */}
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-machinery">
            <div className="works-item">
              <Link href="https://fwmaquinas.com.br" target="_blank" rel="noopener noreferrer">
                <a>
                  <span className="image">
                    <span className="img">
                      <img src="assets/images/fwmaquinas.jpg" alt="FW Máquinas" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span className="name">FW Máquinas</span>
                    <span className="category">Machinery</span>
                  </span>
                </a>
              </Link>
            </div>
          </div>

          {/* Rio Sol */}
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-winery">
            <div className="works-item">
              <Link href="https://vinhosriosol.com.br" target="_blank" rel="noopener noreferrer">
                <a>
                  <span className="image">
                    <span className="img">
                      <img src="assets/images/riosol.jpg" alt="Rio Sol" />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span className="name">Rio Sol</span>
                    <span className="category">Winery</span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectIsotop;
