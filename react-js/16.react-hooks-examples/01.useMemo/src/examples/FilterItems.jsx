import { useState, useMemo } from "react";

//  - In this Example, you will create a component that renders a large list of
//    sentences and includes an input field for filtering these items.
//  - The goal is to use useMemo to optimize the filtering process, ensuring the
//    list is only re-calculated when necessary (e.g., when the filter criteria changes).
//  - You will learn something new here, specifically how you have to pass more than
//    one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 60;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += words[Math.floor(words.length * Math.random())];
        sentence += " ";
    }
    ALL_WORDS.push(sentence);
}

function FilterItems() {
    const [sentences] = useState(ALL_WORDS);
    const [filter, setFilter] = useState("");

    // anytime sentences or filter changes then should render
    const filteredSentences = useMemo(
        () => sentences.filter(x => x.includes(filter)),
        [sentences, filter]
    );

    return (
        <div>
            <input
                type="text"
                onChange={e => {
                    setFilter(e.target.value);
                }}
            ></input>
            {filteredSentences.map(word => (
                <div>{word}</div>
            ))}
            <hr />
        </div>
    );
}

export default FilterItems;
