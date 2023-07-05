import {
    Button,
    Row,
    Col,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    Offcanvas ,
  } from "react-bootstrap";
  import Filter from "./FilterForm";
  
  function FilterButton({ hideShow, title, show }) {
  
    return (
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <Offcanvas show={show} onHide={hideShow} scrollable={true} placement="end">
            <Offcanvas.Header className="offcanvas-header border-bottom" closeButton onClick={hideShow}>
              <Offcanvas.Title className="offcanvas-title"><h5>{title}</h5></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="modal-body">
              <Filter hideShow={hideShow} />
            </Offcanvas.Body>
            {/* <div className="offcanvas-foorter border-top p-3 text-center">
          <button
            type="button"
            onClick={hideShow}
            className="btn btn-light"
            data-bs-dismiss="modal"
            form="myForm"
          >
            Close
          </button>
          <button type="submit" className="btn btn-primary" onClick={hideShow}>
            Save changes
          </button>
        </div> */}
          </Offcanvas>
        </div>
      </div>
    );
  }
  
  export default FilterButton;
  