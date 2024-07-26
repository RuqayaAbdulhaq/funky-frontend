import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const extensions = [StarterKit]

export default function TiptabEditor(props){

    const editor = useEditor({
        extensions,
        content: "<p>edit here</p>",
    })

    return (
        <>
          <EditorContent editor={editor} />
          <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
          <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
        </>
      )
}