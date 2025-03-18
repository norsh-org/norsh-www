import { useState } from "react";
import { t } from "i18next";
import { decodeHtmlAndParse } from "../utils/DecodeHtml";
import { ChevronDown, ChevronUp } from "lucide-react"; // Ícone igual ao do menu
import "./FaqAccordion.css"; 

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    faqPath: string;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqPath }) => {
    const faqItems: FaqItem[] = Array.isArray(t(faqPath, { returnObjects: true }))
        ? (t(faqPath, { returnObjects: true }) as FaqItem[])
        : [];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (faqItems.length === 0) return null;

    return (
        <div className="faq-container">
            <h2 className="faq-title">{t(faqPath.replace(".items", ".title"))}</h2>
            <div className="faq-accordion">
                {faqItems.map((item, index) => (
                    <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
                        <button className="faq-question" onClick={() => toggleItem(index)}>
                            {item.question}
                            {openIndex === index ? (
                                <ChevronUp size={18} className="faq-icon" />
                            ) : (
                                <ChevronDown size={18} className="faq-icon" />
                            )}
                        </button>
                        <div className="faq-answer" style={{ display: openIndex === index ? "block" : "none" }}>
                            {decodeHtmlAndParse(item.answer)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqAccordion;
