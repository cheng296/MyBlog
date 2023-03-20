import React, { useEffect, useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import './index.css'
import htmlToDraft from 'html-to-draftjs';

interface props {
    getContent: (value: any) => void,
    blogContent:string
}
const BlogEditor: React.FC<props> = (props) => {
    const [editorState, setEditorState] = useState<EditorState>()
    useEffect(() => {
        const html = props.blogContent
        if(html===undefined)    return
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            setEditorState(editorState)
        }
    }, [props.blogContent])
    return (
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={(editorState) => setEditorState(editorState)}
            onBlur={() => {
                props.getContent(draftToHtml(convertToRaw((editorState as EditorState ).getCurrentContent())))
            }}
        />
    )
}
export default BlogEditor;
