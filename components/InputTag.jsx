import React, { useState } from "react";
import styles from "./tagsinput.module.css";

function TagsInput(props) {

    const setInput = props.changeInput;
    const setTags = props.changeTags;
    const tags = props.tags;
    const input = props.input;
    const [isKeyReleased, setIsKeyReleased] = useState(false);

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
      };

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();
      
        if (key === ' ' && trimmedInput.length && !tags.includes(trimmedInput)) {
          e.preventDefault();
          setTags(prevState => [...prevState, trimmedInput]);
          setInput('');
        }
      
        if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
          const tagsCopy = [...tags];
          const poppedTag = tagsCopy.pop();
          e.preventDefault();
          setTags(tagsCopy);
          setInput(poppedTag);
        }
      
        setIsKeyReleased(false);
    };
      
    const onKeyUp = () => {
    setIsKeyReleased(true);
    }

    const deleteTag = (index) => {
    setTags(prevState => prevState.filter((tag, i) => i !== index))
    }


    return (
    <div className={styles.container}>
    {tags.map((tag, index) => (
        <div className={styles.tag} key={index}>
            {tag}
            <button onClick={() => deleteTag(index)}>x</button>
        </div>
    ))}
    <input
        value={input}
        className={styles.InputTags}
        placeholder="Enter a tag"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
        />
  </div>);
}
export default TagsInput; 