interface RenderPropsI {
  id: string;
  node: () => Node;
}

export const render = (data: RenderPropsI): void => {
  const rootEl = document.getElementById(data.id) as HTMLElement;
  rootEl.appendChild(data.node());
};
