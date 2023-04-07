import React from "react";

function Errors() {
  return (
    <div class="card-body">
      {/* <p class="text-muted">Use <code>data-toast</code> <code>data-toast-text=""</code> <code>data-toast-gravity=""</code> <code>data-toast-position=""</code> <code>data-toast-className=""</code> <code>data-toast-duration=""</code> <code>data-toast-close="close"</code> <code>data-toast-style="style"</code> as per your toast requirement.</p> */}
      <div class="live-preview">
        <div class="hstack flex-wrap gap-2">
          <button
            type="button"
            data-toast
            data-toast-text="Welcome Back! This is a Toast Notification"
            data-toast-gravity="top"
            data-toast-position="right"
            data-toast-className="primary"
            data-toast-duration="3000"
            data-toast-close="close"
            data-toast-style="style"
            class="btn btn-light w-xs "
          >
            Default
          </button>
          <button
            type="button"
            data-toast
            data-toast-text="Your application was successfully sent"
            data-toast-gravity="top"
            data-toast-position="center"
            data-toast-className="success"
            data-toast-duration="3000"
            class="btn btn-light w-xs"
          >
            Success
          </button>
          <button
            type="button"
            data-toast
            data-toast-text="Warning ! Something went wrong try again"
            data-toast-gravity="top"
            data-toast-position="center"
            data-toast-className="warning"
            data-toast-duration="3000"
            class="btn btn-light w-xs"
          >
            Warning
          </button>
          <button
            type="button"
            data-toast
            data-toast-text="Error ! An error occurred."
            data-toast-gravity="top"
            data-toast-position="center"
            data-toast-className="danger"
            data-toast-duration="3000"
            class="btn btn-light w-xs"
          >
            Error
          </button>
        </div>
      </div>
    </div>
  );
}

export default Errors;
