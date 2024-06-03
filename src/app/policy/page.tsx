import htmlContent from './untitled.html';

const YourComponent = () => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default YourComponent;
