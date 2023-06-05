import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { setMD } from "../helpers/fetchData";

const Text = ({ mdFile }: { mdFile: "*.md" }) => {
    //fetch md files
    const [content, setContent] = useState("");

    useEffect(() => {
        setMD(mdFile).then((text) => setContent(text));
    }, []);
    return <ReactMarkdown children={content} className="section content" />;
};

export default Text;
