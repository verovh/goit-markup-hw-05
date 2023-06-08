(() => {
    const refs = {
      openModalBtn: document.querySelector(".banner-button"),
      closeModalBtn: document.querySelector(".close-modal"),
      modal: document.querySelector(".modal"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();



// (() => {
//   const refs = {
//     openModalBtn: document.querySelector(".banner-button"),
//     closeModalBtn: document.querySelector(".close-modal"),
//     modal: document.querySelector(".modal"),
//   };

//   refs.openModalBtn.addEventListener("click", openModal);
//   refs.closeModalBtn.addEventListener("click", closeModal);

//   function openModal() {
//     refs.modal.classList.add("modal-open");
//     refs.modal.classList.remove("modal-closed");
//   }
  
//   function closeModal() {
//       refs.modal.classList.add("modal-closed");
//       refs.modal.classList.remove("modal-open");
//    }
// })();