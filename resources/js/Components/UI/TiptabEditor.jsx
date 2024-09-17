import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';
import { all ,createLowlight } from 'lowlight';
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import React from 'react';

const lowlight = createLowlight(all);
lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)


export default function TipTapEditor(props) {
  const editor = useEditor({
    extensions: [StarterKit, CodeBlockLowlight.configure({
      lowlight,
    })],
    content: "<p>console.log('hello')</p>",
  });

  if (!editor) {
    return null; // Prevent rendering if editor is not initialized
  }

  const addTextBlock = () => {
    editor.chain().focus().insertContent('<p>New Paragraph</p>').run(); // Insert a new paragraph
  };

  // Function to insert a code block at the current position
  const addCodeBlock = () => {
    editor.chain().focus().setCodeBlock().run();// Insert a code block
  };

  console.log(editor);
  // console.log(highlight);
  return (
    <div className='flex flex-col gap-5'>
      <button className='bg-blue-600 text-white p-2 rounded-md' onClick={addTextBlock}>Add content</button>
      <button className='bg-blue-600 text-white p-2 rounded-md' onClick={addCodeBlock}>Add code</button>

      <EditorContent editor={editor} className="border p-4 rounded" />

      {/* Only render the FloatingMenu when the editor is active */}
      {editor && (
        <FloatingMenu editor={editor} className="bg-white p-2 rounded shadow-lg flex gap-2">
          <button onClick={() => editor.chain().focus().toggleBold().run()}>
            Bold
          </button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()}>
            Italic
          </button>
          <button onClick={() => editor.chain().focus().toggleStrike().run()}>
            Strike
          </button>
        </FloatingMenu>
      )}

      {/* Only render the BubbleMenu when text is selected */}
      {editor && (
        <BubbleMenu editor={editor} className="bg-white p-2 rounded shadow-lg flex gap-2">
          <button onClick={() => editor.chain().focus().toggleBold().run()}>
            Bold
          </button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()}>
            Italic
          </button>
          <button onClick={() => editor.chain().focus().toggleStrike().run()}>
            Strike
          </button>
        </BubbleMenu>
      )}
    </div>
  );
}
