import React, { useEffect, useRef, useState } from "react";
import "./Acor.css";

function Accordion({ contents = [] }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);
    const [heights, setHeights] = useState([]);

    useEffect(() => {
        const newHeights = contents.map((_, index) =>
            activeIndex === index ? `${contentRefs.current[index].scrollHeight}px` : "0px"
        );
        setHeights(newHeights);
    }, [activeIndex, contents]);

    function toggleAccordion(index) {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    }

    return (
        <div className="accordion__section">
            {contents.map((item, index) => (
                <div key={index}>
                    <div
                        className={`accordion ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <p className="accordion__title">{item.title}</p>
                        <span style={{ marginLeft: "20px" }}>

                        </span>
                    </div>
                    <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        style={{ maxHeight: heights[index] }}
                        className={`accordion__content ${activeIndex === index ? "open" : ""}`}
                    >
                        {item.content ? (
                            <div
                                className="accordion__text"
                                dangerouslySetInnerHTML={{ __html: item.content }}
                            />
                        ) : item.subItems ? (
                            <Accordion contents={item.subItems} />
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
