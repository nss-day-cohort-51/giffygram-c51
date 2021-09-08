export const Post = (postObject) => {
    return `
      <section class="post" id=${postObject.id}>
        <header>
            <h2 class="post__title">${postObject.title}</h2>
        </header>
        <img class="post__image" src="${postObject.imageURL}" />
        <div><button id="edit--${postObject.id}">Edit</button></div>
      </section>
    `
  }