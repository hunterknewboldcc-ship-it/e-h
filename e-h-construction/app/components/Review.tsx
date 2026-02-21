interface ReviewProps {
  text: string;
  author: string;
}

const Review: React.FC<ReviewProps> = ({ text, author }) => {
  return (
    <div className="bg-eh-gray p-6 rounded-lg shadow-md">
      <p className="text-lg text-eh-charcoal italic">"{text}"</p>
      <p className="text-right mt-4 font-bold text-eh-navy">- {author}</p>
    </div>
  );
};

export default Review;
