// import Editor from 'ckeditor5-custom-build/build/ckeditor'
// import { CKEditor } from '@ckeditor/ckeditor5-react';

// eslint-disable-next-line react/prop-types
const BlogEditor = ({ state, setState }) => {

  const handleChange = (e, editor) => {
    setState(editor.getData())
  }

  return (
    <>
      {/* <CKEditor
        editor={Editor}
        data={state}
        onChange={(e, editor) => { handleChange(e, editor) }}
        config={{
          height: '300px', // Set the initial height
          toolbar: [
            'alignment',
            'autoImage',
            'autoLink',
            'autoformat',
            'base64UploadAdapter',
            'blockQuote',
            'bold',
            'essentials',
            'fontSize',
            'heading',
            'image',
            'imageCaption',
            'imageUpload',
            'italic',
            'link',
            'list',
            'mediaEmbed',
            'paragraph',
            'undo',
            'redo',
            'bulletedList',
            'numberedList'
          ]
        }}
        onReady={(editor) => {
          editor.ui.view.editable.element.style.minHeight = "300px";
        }}
        onBlur={(event, editor) => {
          console.log(event)
          editor.ui.view.editable.element.style.minHeight = '300px';
        }}
        onFocus={(event, editor) => {
          editor.ui.view.editable.element.style.minHeight = "300px";
        }}
      /> */}
    </>
  )
}

export default BlogEditor