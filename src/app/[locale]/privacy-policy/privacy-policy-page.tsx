import { Child, Page, TextElement } from "@/app/_interfaces/layout";
import React from "react";

interface Props {
  page: Page;
}

function PrivacyPolicyPage(props: Props) {
  const { page } = props;

  const renderElement = (element: TextElement) => {
    switch (element.type) {
      case "h2":
        return <h2 className="mb-4">{renderChildren(element.children)}</h2>;
      case "h4":
        return <h4 className="text-lg text-black mt-4 mb-2">{renderChildren(element.children)}</h4>;
      case "ul":
        return (
          <ul className="list-disc pl-6 my-2 text-[14px]">
            {element.children.map((li, index) => (
              <li key={index} className="mb-2">{renderChildren(li.children)}</li>
            ))}
          </ul>
        );
      case "li":
        return <li>{renderChildren(element.children)}</li>;
      case "link":
        return (
          <a className="underline" href={element.url} target={element.newTab ? "_blank" : "_self"}>
            {renderChildren(element.children)}
          </a>
        );
      default:
        return <p className="text-base mt-4">{renderChildren(element.children)}</p>;
    }
  };

  const renderChildren = (children: Child[]) => {
    return children.map((child, index) => {
      if (child.bold) {
        return <strong className='text-base font-bold mt-2' key={index}>{child.text}</strong>;
      }
      return <span key={index}>{child.text}</span>;
    });
  };

  return (
    <div className="container mx-auto pb-40 lg:px-8">
      {page.layout.map((block) => (
        <div key={block.id} className="block">
          {block.text?.map((element, index) => (
            <div key={index}>{renderElement(element)}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PrivacyPolicyPage;
