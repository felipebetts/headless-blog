import React from 'react'
import { MDXEditor, headingsPlugin } from '@mdxeditor/editor'
import type { MDXEditorMethods } from '@mdxeditor/editor'

const MdxEditor = () => {
    const ref = React.useRef<MDXEditorMethods>(null)
    return (
      <>
        <button onClick={() => ref.current?.setMarkdown('new markdown')}>Set new markdown</button>
        <button onClick={() => console.log(ref.current?.getMarkdown())}>Get markdown</button>
        <MDXEditor markdown='# Hello world' plugins={[headingsPlugin()]} />
      </>
    )
}

export default MdxEditor