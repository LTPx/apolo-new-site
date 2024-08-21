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
        return <h2>{renderChildren(element.children)}</h2>;
      case "h4":
        return <h4>{renderChildren(element.children)}</h4>;
      case "ul":
        return (
          <ul>
            {element.children.map((li, index) => (
              <li key={index}>{renderChildren(li.children)}</li>
            ))}
          </ul>
        );
      case "li":
        return <li>{renderChildren(element.children)}</li>;
      case "link":
        return (
          <a href={element.url} target={element.newTab ? "_blank" : "_self"}>
            {renderChildren(element.children)}
          </a>
        );
      default:
        return <p>{renderChildren(element.children)}</p>;
    }
  };

  // Función para renderizar los hijos del elemento
  const renderChildren = (children: Child[]) => {
    return children.map((child, index) => {
      if (child.bold) {
        return <strong key={index}>{child.text}</strong>;
      }
      return <span key={index}>{child.text}</span>;
    });
  };

  return (
    <div className="pa">
      <h1>{page.pageName}</h1>
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
