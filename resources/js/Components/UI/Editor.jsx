import React, { useState } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { Image } from "@tiptap/extension-image";
import { Link } from "@tiptap/extension-link";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from '@tiptap/extension-text-align';
import Text from '@tiptap/extension-text';
import ListItem from "@tiptap/extension-list-item";
import Underline from '@tiptap/extension-underline';
import BulletList from '@tiptap/extension-bullet-list';
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import HardBreak from '@tiptap/extension-hard-break'
import { all, createLowlight } from "lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

const lowlight = createLowlight(all);
lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);

const TiptapEditor = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
    const [color, setColor] = useState("#000000");

    const editor = useEditor({
        extensions: [
            StarterKit,
            CodeBlockLowlight.configure({
                lowlight,
            }),
            Image,
            Link,
            TextStyle,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Underline,
            Text,
            BulletList,
            ListItem,
            HardBreak,
            HorizontalRule,
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
        ],
        content: "<p>Start writing...</p>",
    });

    const changeTextColor = (color) => {
        editor?.commands.setMark("textStyle", { color });
    };

    const addNewSection = (type) => {
        switch (type) {
            case "text":
                editor?.commands
                    .insertContent(
                        '<div class="mb-6"><p>new Section...</p></div>'
                    );
                break;
            case "code":
                editor?.commands
                    .insertContent(
                        '<div class="mb-6"><pre><code>console.log("hello")</code></pre></div>'
                    );
                break;
            case "image":
                editor?.commands
                    .insertContent(
                        '<div class="mb-6"><img src="https://via.placeholder.com/150" /></div>'
                    );
                break;
            case "url":
                editor?.commands
                    .insertContent(
                        '<div class="mb-6"><a href="https://example.com">example.com</a></div>'
                    );
                break;
            case "h1":
                editor?.commands
                    .insertContent(
                        '<div class="mb-6 "><h1 class="text-4xl dark:text-white">header 1</h1></div>'
                    );
                break;
            case "br":
                editor?.commands
                    .insertContent(
                        '<br/>'
                    );
                break;
            case "hr":
                editor?.commands
                    .insertContent(
                        '<hr/>'
                    );
                break;
            default:
                break;
        }
        setDropdownOpen(false); // Close dropdown after selection
    };

    return (
        <div className="w-[60%] mx-auto">
            {/* Fixed Header for content type selection */}
            <div className="sticky top-0 z-10 flex justify-between items-center bg-gray-100 p-4 border-b border-gray-300">
                <h2 className="text-lg font-bold">Editor Toolbar</h2>
            </div>

            {/* Editor Container */}
            <div className="prose prose-lg max-w-none p-4 border border-gray-300 rounded-md shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                <EditorContent editor={editor} />
            </div>

            <BubbleMenu
                shouldShow={(data) => {
                    return (data.editor.isActive('paragraph') || data.editor.isActive('bulletList')) && !data.state.selection.empty;
                }}
                editor={editor}
                className="flex flex-col gap-2 p-2 bg-white border border-gray-200 rounded shadow-lg"
            >
                <div className="flex gap-2">
                    <button
                        onClick={() => editor.commands.toggleBold()}
                        className={`px-3 py-2 text-sm ${editor.isActive('bold') ? "bg-blue-200 text-gray-800" : "bg-gray-100 text-gray-500"} rounded hover:text-blue-600`}
                    >
                        <i class="bi bi-type-bold text-md"></i>
                    </button>
                    <button
                        onClick={() => editor.commands.toggleItalic()}
                        className={`px-3 py-2 text-sm ${editor.isActive('italic') ? "bg-blue-200 text-gray-800" : "bg-gray-100 text-gray-500"} rounded hover:text-blue-600`}
                    >
                        <i class="bi bi-type-italic text-md"></i>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={`px-3 py-2 text-sm ${editor.isActive('underline') ? "bg-blue-200 text-gray-800" : "bg-gray-100 text-gray-500"} rounded hover:text-blue-600`}
                    >
                        <i class="bi bi-type-underline text-md"></i>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={`px-3 py-2 text-sm ${editor.isActive('bulletList') ? "bg-blue-200 text-gray-800" : "bg-gray-100 text-gray-500"} rounded hover:text-blue-600`}
                    >
                        <i class="bi bi-list-ul text-md"></i>
                    </button>
                </div>
                
                <div className="flex gap-2">
                    <button
                        onClick={() =>
                            editor.chain().focus().setTextAlign("left").run()
                        }
                        className={
                            `px-3 py-2 text-sm ${editor.isActive({ textAlign: 'left' }) ? "bg-blue-200 text-gray-800" : "bg-gray-100 text-gray-500"} rounded hover:text-blue-600`
                        }
                    >
                        <i class="bi bi-text-left text-md"></i>
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().setTextAlign("center").run()
                        }
                        className={
                            `px-3 py-2 text-sm ${editor.isActive({ textAlign: 'center' }) ? "bg-blue-200 text-gray-800" : "bg-gray-100 text-gray-500"} rounded hover:text-blue-600`
                        }
                    >
                        <i class="bi bi-text-center text-md"></i>
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().setTextAlign("right").run()
                        }
                        className={
                            `px-3 py-2 text-sm ${editor.isActive({ textAlign: 'right' }) ? "bg-blue-200 text-gray-800" : "bg-gray-100 text-gray-500"} rounded hover:text-blue-600`
                        }
                    >
                        <i class="bi bi-text-right text-md"></i>
                    </button>
                    <button
                        onClick={() =>
                            editor.chain().focus().setTextAlign('justify').run()
                        }
                        className={
                            `px-3 py-2 text-sm ${editor.isActive({ textAlign: 'justify' }) ? "bg-blue-200 text-gray-800" : "bg-gray-100 text-gray-500"} rounded hover:text-blue-600`
                        }
                    >
                        <i class="bi bi-justify text-md"></i>
                    </button>
                </div>

                <div className="flex gap-2">
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => {
                            setColor(e.target.value);
                            changeTextColor(e.target.value);
                        }}
                        className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700"
                    />
                </div>
                
            </BubbleMenu>

            {/* Plus Button and Dropdown for Adding New Section */}
            <div className="relative flex justify-center mt-4">
                <button
                    className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 shadow-lg"
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                    +
                </button>
                {isDropdownOpen && (
                    <div className="absolute top-10 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg z-10">
                        <button
                            className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                            onClick={() => addNewSection("text")}
                        >
                            Text
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                            onClick={() => addNewSection("code")}
                        >
                            Code Block
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                            onClick={() => addNewSection("image")}
                        >
                            Image
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                            onClick={() => addNewSection("url")}
                        >
                            URL
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                            onClick={() => addNewSection("h1")}
                        >
                            H1
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                            onClick={() => addNewSection("br")}
                        >
                            Break
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                            onClick={() => addNewSection("hr")}
                        >
                            Horizontal Rule 
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TiptapEditor;
