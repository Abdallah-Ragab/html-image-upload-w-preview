const uploadBox = document.querySelector('.upload-box');
const fileInput = uploadBox.querySelector('#file-input');
const preview = uploadBox.querySelector('#preview');
const placeholder = uploadBox.querySelector('#placeholder');
const placeholderIcon = placeholder.querySelector('.icon');
const overlay = uploadBox.querySelector('#overlay');
const addIcon = overlay.querySelector('#add-icon');
const editIcon = overlay.querySelector('#edit-icon');

uploadBox.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        preview.style.backgroundImage = `url(${reader.result})`;
        placeholder.classList.add('hidden');
        // addIcon.classList.toggle('hidden');
        // editIcon.classList.toggle('hidden');
        uploadBox.classList.add('occupied');
    }
    reader.readAsDataURL(file);
});
