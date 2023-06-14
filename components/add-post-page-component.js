import { uploadImage } from "../api.js";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
  <div class="header-container">
    <div class="page-header">
      <h1 class="logo">instapro</h1>
      <button class="header-button add-or-login-button">
        <div title="Добавить пост" class="add-post-sign"></div>
      </button>
      <button title="Админ" class="header-button logout-button">Выйти</button>  
    </div>
  </div>

  <div class="form">
    <h3 class="form-title">Добавить пост</h3>
    <div class="form-inputs">
      <div class="upload-image-container">
        <div class="upload=image">
          <label class="file-upload-label secondary-button">
              <input type="file" class="file-upload-input" style="display:none">
              Выберите фото
          </label>
        </div>
      </div>
        <label>
          Опишите фотографию:
          <textarea class="input textarea" rows="4"></textarea>
        </label>
          <button class="button" id="add-button">Добавить</button>
    </div>
  </div>
</div>
  `;

    appEl.innerHTML = appHtml;

    

    document.getElementById("add-button").addEventListener("click", () => {

      const imageDescription = document.querySelector('.textarea');
      const fileInputElement = document.querySelector('.file-upload-input');
      uploadImage({ file: fileInputElement.files[0] });
      console.log(data.fileUrl)

      // onAddPostClick({
      //   description: imageDescription.value,
      //   imageUrl: data.fileUrl,
      // });
    });
  };

  render();
}

// export const newPost = {
//   name: commentName.value
//       .replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
//   text: commentText.value
//       .replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
//   date: formatDate(),
//   like: 0,
//   likeStatus: false,
// }