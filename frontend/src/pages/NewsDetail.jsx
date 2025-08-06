import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { slug } = useParams();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">News Article: {slug}</h1>
      <p className="text-gray-600 mt-4">Here you can load article content based on slug using API or file.</p>
    </div>
  );
};

export default NewsDetail;