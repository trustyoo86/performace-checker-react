import { useEffect } from "react";

interface IProps {
  containerId: string;
}

function useTemplate({ containerId }: IProps) {
  useEffect(() => {
    const containerEl = document.getElementById(containerId);

    const observer = new MutationObserver((mutationList, observer) => {
      console.log('mutationObserver =>', mutationList, observer);
    });

    observer.observe(containerEl as HTMLElement, {
      childList: true,
      attributes: true,
      subtree: true,
    });

    const element = document.createElement('div');
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.border = '1px solid #bdbdbd';

    containerEl && containerEl.appendChild(element);

  }, [containerId]);

  return {
    containerId,
  };
}

export default useTemplate;
