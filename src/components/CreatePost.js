import {firestore} from "../firebase";
import {useFormInput} from "../hooks";

function CreatePost() {

  const title = useFormInput("");
  const subtitle = useFormInput("");
  const content = useFormInput("");

  function handleSubmit(e){
    e.preventDefault();
    console.log("title",title);
    console.log("subtitle",subtitle);
    console.log("Content",content);

      
    firestore.collection('posts').add({
      title:title.value,
      subtitle:subtitle.value,
      content:content.value,
      createdAt:new Date(),
    });
  }


  return <div className="create-post">
    <h1>Create Post</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Title</label>
        <input {...title}/>
      </div>

      <div className="form-field">
        <label>Sub Title</label>
        <input {...subtitle}/>
      </div>

      <div className="form-field">
        <label>Cotent</label>
        <textarea {...content}></textarea>
      </div>

      <button className="create-post-btn">Create Post</button>
    </form>
  </div>;
}

export default CreatePost;
